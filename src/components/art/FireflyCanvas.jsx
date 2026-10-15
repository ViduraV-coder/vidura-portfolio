import { useEffect, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Camera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three';
import {
  AMBER_FIREFLIES,
  BLUE_FIREFLIES,
  SHOOTING_STARS,
  SKY_HEIGHT,
  SKY_WIDTH,
} from '../../data/fireflies';
import { bandStart } from '../../data/skyBands';
import { setSkyActive } from '../../lib/skyState';

// The same fireflies and shooting stars as the svg sky (data/fireflies.js), drawn with Three.js:
// one transparent canvas fixed over the viewport and one draw call. Every light is a soft glowing
// point, and they drift out of the way of the mouse. Positions are worked out the same way the
// svg bands place them, so the lights sit where they always did.

const TRAIL = 14; // points that make up a shooting star's tail
const REPEL_RADIUS = 130; // px around the pointer where fireflies get nudged aside
const REPEL_PUSH = 34; // how far, at most

// --- turning the svg's animation strings into numbers -------------------------------------------

const pairs = (text) => text.split(';').map((p) => p.trim().split(/\s+/).map(Number));
const numbers = (text) => text.split(';').map(Number);

// svg's default: values spread evenly over one loop, blended linearly
function even(values, t) {
  const at = t * (values.length - 1);
  const i = Math.min(values.length - 2, Math.floor(at));
  return [values[i], values[i + 1], at - i];
}
const mix = (a, b, f) => a + (b - a) * f;

// values placed at given times (keyTimes). Two equal times make a jump, which is how the
// shooting stars appear out of nowhere
function keyed(times, values, t) {
  for (let i = 0; i < times.length - 1; i += 1) {
    if (t >= times[i] && t < times[i + 1])
      return [values[i], values[i + 1], (t - times[i]) / (times[i + 1] - times[i])];
  }
  const last = values.length - 1;
  return [values[last], values[last], 0];
}

const loop = (seconds, begin, now) => {
  const t = (now - begin) / seconds;
  return t - Math.floor(t);
};

const FIREFLIES = [
  ...BLUE_FIREFLIES.map((f) => ({ f, tone: 0 })),
  ...AMBER_FIREFLIES.map((f) => ({ f, tone: 1 })),
].map(({ f: [x, y, r, move, moveDur, moveBegin, blink, blinkDur, blinkBegin], tone }) => ({
  x,
  y,
  r,
  tone,
  move: pairs(move),
  moveDur,
  moveBegin,
  blink: numbers(blink),
  blinkDur,
  blinkBegin,
  band: bandStart(y),
  pushX: 0,
  pushY: 0,
}));

const STARS = SHOOTING_STARS.map((s) => ({
  tail: s.tail,
  r: s.r,
  dur: parseFloat(s.dur),
  times: numbers(s.keyTimes),
  path: pairs(s.path),
  fade: numbers(s.fade),
  band: bandStart(parseFloat(s.path.split(' ')[1])),
}));

const COUNT = FIREFLIES.length + STARS.length * TRAIL;

// --- the shaders ----------------------------------------------------------------------------------

const VERTEX = `
  attribute float aSize;
  attribute float aAlpha;
  attribute float aTone;
  uniform vec2 uRes;
  uniform float uDpr;
  varying float vAlpha;
  varying float vTone;
  void main() {
    gl_Position = vec4(position.x / uRes.x * 2.0 - 1.0, 1.0 - position.y / uRes.y * 2.0, 0.0, 1.0);
    gl_PointSize = aSize * uDpr;
    vAlpha = aAlpha;
    vTone = aTone;
  }
`;

const FRAGMENT = `
  precision mediump float;
  varying float vAlpha;
  varying float vTone;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float core = smoothstep(0.17, 0.05, d);
    float halo = exp(-d * d * 5.0) * 0.4;
    float a = (core + halo) * vAlpha;
    vec3 blue = vec3(0.81, 0.89, 1.0);
    vec3 amber = vec3(1.0, 0.85, 0.63);
    vec3 white = vec3(1.0);
    vec3 color = vTone < 0.5 ? blue : (vTone < 1.5 ? amber : white);
    gl_FragColor = vec4(color * a, a);
  }
`;

export default function FireflyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const story = document.getElementById('story');
    if (!canvas || !story) return undefined;

    let renderer;
    try {
      renderer = new WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        premultipliedAlpha: true,
        powerPreference: 'low-power',
        failIfMajorPerformanceCaveat: true,
      });
    } catch {
      return undefined; // no WebGL here: the svg fireflies stay
    }

    const positions = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const alphas = new Float32Array(COUNT);
    const tones = new Float32Array(COUNT);
    FIREFLIES.forEach((f, i) => {
      tones[i] = f.tone;
    });
    STARS.forEach((_, s) => {
      tones.fill(2, FIREFLIES.length + s * TRAIL, FIREFLIES.length + (s + 1) * TRAIL);
    });

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3).setUsage(35048));
    geometry.setAttribute('aSize', new BufferAttribute(sizes, 1).setUsage(35048));
    geometry.setAttribute('aAlpha', new BufferAttribute(alphas, 1).setUsage(35048));
    geometry.setAttribute('aTone', new BufferAttribute(tones, 1));

    const uniforms = { uRes: { value: [1, 1] }, uDpr: { value: 1 } };
    const material = new ShaderMaterial({
      uniforms,
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: AdditiveBlending,
    });
    const points = new Points(geometry, material);
    points.frustumCulled = false;
    const scene = new Scene();
    scene.add(points);
    const camera = new Camera();

    // the page can be scaled up with css zoom on very wide screens, so work out how big a css pixel
    // is and size the canvas to cover exactly the viewport
    const site = document.querySelector('.site');
    let width = 0;
    let height = 0;
    const resize = () => {
      const zoom = parseFloat(getComputedStyle(site).zoom) || 1;
      width = document.documentElement.clientWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      canvas.style.width = `${width / zoom}px`;
      canvas.style.height = `${height / zoom}px`;
      uniforms.uRes.value = [width, height];
      uniforms.uDpr.value = dpr;
    };
    resize();
    window.addEventListener('resize', resize);

    const pointer = { x: -9999, y: -9999 };
    const onPointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    let frame = 0;
    let inView = false;
    let shown = false;
    let readyTimer = 0;
    const start = performance.now();

    const draw = (now) => {
      frame = 0;
      const time = (now - start) / 1000;

      // where the story is on screen, and how its svg sky is scaled (the same slice-to-fit
      // rule the svg bands use)
      const box = story.getBoundingClientRect();
      const fix = width / box.width; // 1 unless the engine reports pre-zoom sizes
      const top = box.top * fix;
      const w = box.width * fix;
      const h = box.height * fix;
      const scale = Math.max(w / SKY_WIDTH, h / SKY_HEIGHT);
      const left = (w - SKY_WIDTH * scale) / 2;
      const place = (x, y, band) => [
        left + x * scale,
        top + (band / SKY_HEIGHT) * h + (y - band) * scale,
      ];

      FIREFLIES.forEach((f, i) => {
        const [a, b, k] = even(f.move, loop(f.moveDur, f.moveBegin, time));
        const [px, py] = place(f.x + mix(a[0], b[0], k), f.y + mix(a[1], b[1], k), f.band);

        // ease away from the pointer, and back again when it leaves
        const dx = px - pointer.x;
        const dy = py - pointer.y;
        const dist = Math.hypot(dx, dy) || 1;
        const near = Math.max(0, 1 - dist / REPEL_RADIUS);
        f.pushX += ((dx / dist) * near * near * REPEL_PUSH - f.pushX) * 0.08;
        f.pushY += ((dy / dist) * near * near * REPEL_PUSH - f.pushY) * 0.08;

        const [c, d, m] = even(f.blink, loop(f.blinkDur, f.blinkBegin, time));
        const x = px + f.pushX;
        const y = py + f.pushY;
        const visible = y > -40 && y < height + 40;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        sizes[i] = f.r * scale * 14;
        alphas[i] = visible ? mix(c, d, m) : 0;
      });

      STARS.forEach((s, n) => {
        const t = loop(s.dur, 0, time);
        const [p, q, k] = keyed(s.times, s.path, t);
        const [u, v, j] = keyed(s.times, s.fade, t);
        const [hx, hy] = place(mix(p[0], q[0], k), mix(p[1], q[1], k), s.band);
        const fade = mix(u, v, j);
        for (let i = 0; i < TRAIL; i += 1) {
          const at = i / (TRAIL - 1);
          const idx = FIREFLIES.length + n * TRAIL + i;
          positions[idx * 3] = hx + s.tail[0] * scale * at;
          positions[idx * 3 + 1] = hy + s.tail[1] * scale * at;
          sizes[idx] = mix(s.r * scale * 9, 3, at);
          alphas[idx] = fade * (1 - at) ** 1.5;
        }
      });

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aSize.needsUpdate = true;
      geometry.attributes.aAlpha.needsUpdate = true;
      renderer.render(scene, camera);

      if (!shown) {
        shown = true;
        canvas.style.opacity = '1';
        // once it has faded in, the svg lights it replaces can switch off
        readyTimer = window.setTimeout(() => setSkyActive(true), 900);
      }
      if (inView && !document.hidden) frame = window.requestAnimationFrame(draw);
    };

    const wake = () => {
      if (!frame && inView && !document.hidden) frame = window.requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      wake();
    });
    observer.observe(story);
    document.addEventListener('visibilitychange', wake);

    // if the browser takes the GL context away, hand the sky back to the svg lights
    const onLost = (event) => {
      event.preventDefault();
      inView = false;
      setSkyActive(false);
      canvas.style.opacity = '0';
    };
    canvas.addEventListener('webglcontextlost', onLost);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(readyTimer);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', wake);
      canvas.removeEventListener('webglcontextlost', onLost);
      setSkyActive(false);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 opacity-0 transition-opacity duration-[900ms]"
      aria-hidden="true"
    />
  );
}
