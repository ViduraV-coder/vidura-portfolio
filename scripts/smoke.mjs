// health check for a running copy of the site, needs node 20+ and nothing else
//   npm run smoke                           checks http://localhost:4173 (after build + preview)
//   npm run smoke -- https://viduvish.dev   after a deploy, also checks the certificate,
//                                           the https redirect and the security headers
// exits 1 if anything fails, so it can run in CI too

import tls from 'node:tls';

const base = new URL(process.argv[2] || 'http://localhost:4173').origin;
const live = new URL(base).protocol === 'https:';

let failed = 0;
function check(ok, label, detail = '') {
  if (!ok) failed += 1;
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${label}${!ok && detail ? ` (${detail})` : ''}`);
}
function section(title) {
  console.log(`\n${title}`);
}

async function get(path, options = {}) {
  const res = await fetch(new URL(path, base), { redirect: 'manual', ...options });
  return res;
}

// certificate and redirect

if (live) {
  section('Certificate');
  const { hostname } = new URL(base);
  const port = Number(new URL(base).port) || 443;
  const socket = await new Promise((resolve, reject) => {
    const s = tls.connect({ host: hostname, port, servername: hostname }, () => resolve(s));
    s.on('error', reject);
    s.setTimeout(10000, () => reject(new Error('timed out')));
  }).catch((err) => err);

  if (socket instanceof Error) {
    check(false, 'could connect over TLS', socket.message);
  } else {
    const cert = socket.getPeerCertificate();
    const daysLeft = Math.floor((new Date(cert.valid_to) - Date.now()) / 86400000);
    check(socket.authorized, 'certificate is trusted', String(socket.authorizationError));
    check(tls.checkServerIdentity(hostname, cert) === undefined, `certificate matches ${hostname}`);
    check(daysLeft > 14, `certificate has ${daysLeft} days left`);
    check(
      ['TLSv1.2', 'TLSv1.3'].includes(socket.getProtocol()),
      `protocol is ${socket.getProtocol()}`,
    );
    socket.end();
  }

  const plain =
    port !== 443
      ? null
      : await fetch(`http://${hostname}/`, { redirect: 'manual' }).catch((err) => err);
  if (plain) {
    const to = plain instanceof Error ? '' : plain.headers.get('location') || '';
    check(
      !(plain instanceof Error) &&
        [301, 302, 307, 308].includes(plain.status) &&
        to.startsWith('https://'),
      'http:// redirects to https://',
      plain instanceof Error ? plain.message : `${plain.status} ${to}`,
    );
  }
}

// the page

section(`Page  ${base}/`);
const home = await get('/').catch((err) => err);
if (home instanceof Error) {
  check(false, 'site can be reached', home.cause?.code || home.message);
  console.log(`\n${failed} check${failed === 1 ? '' : 's'} failed.\n`);
  process.exit(1);
}
const html = await home.text();
check(home.status === 200, 'home page answers 200', `got ${home.status}`);
check((home.headers.get('content-type') || '').includes('text/html'), 'served as html');
check(/<title>[^<]*Vidura Gam Hewage/.test(html), 'title has the name in it');
check(/<meta\s+name="description"\s+content="[^"]{60,}/.test(html), 'meta description is there');
check(
  html.includes('rel="canonical" href="https://viduvish.dev/"'),
  'canonical points at viduvish.dev',
);
check(
  html.includes('property="og:image" content="https://viduvish.dev/og.jpg"'),
  'share image is set',
);
check(html.includes('<noscript>'), 'has the no-JavaScript fallback');
check(html.includes('application/ld+json'), 'has the structured data');

// everything index.html pulls in has to exist
const refs = [...html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g)].map((m) => m[1]);
const missing = [];
for (const ref of new Set(refs)) {
  const res = await get(ref);
  if (res.status !== 200) missing.push(`${ref} ${res.status}`);
}
check(
  refs.length > 0 && missing.length === 0,
  `all ${new Set(refs).size} linked files load`,
  missing.join(', '),
);

const script = refs.find((ref) => /assets\/index-.*\.js$/.test(ref));
if (script) {
  const js = await (await get(script)).text();
  check(js.includes('hello@viduvish.dev'), 'contact address is in the script');
  check(!js.includes('localhost:'), 'no localhost addresses in the script');
}

// other files

section('Files');
const cv = await get('/Vidura-Gam-Hewage-CV.pdf');
const cvBytes = Buffer.from(await cv.arrayBuffer());
check(cv.status === 200 && cvBytes.subarray(0, 4).toString() === '%PDF', 'CV downloads as a pdf');

const og = await get('/og.jpg');
check(
  og.status === 200 && (og.headers.get('content-type') || '').includes('image/jpeg'),
  'og.jpg is a jpeg',
);

const robots = await get('/robots.txt');
const robotsText = await robots.text();
check(
  robots.status === 200 && /Sitemap:\s*https:\/\/viduvish\.dev\/sitemap\.xml/.test(robotsText),
  'robots.txt points at the sitemap',
);
check(!/Disallow:\s*\/\s*$/m.test(robotsText), 'robots.txt does not block the whole site');

const sitemap = await get('/sitemap.xml');
const sitemapText = await sitemap.text();
check(
  sitemap.status === 200 && sitemapText.includes('<loc>https://viduvish.dev/</loc>'),
  'sitemap.xml lists the home page',
);

const lost = await get('/this-page-does-not-exist');
const lostText = await lost.text();
check(
  lost.status === 404 && /not found/i.test(lostText),
  'unknown address shows the 404 page with a 404 status',
  `got ${lost.status}`,
);

// headers

section('Headers (home page)');
if (!live) {
  console.log(
    '  note: vite preview ignores public/_headers, so these only pass on Cloudflare Pages',
  );
}
const h = (name) => home.headers.get(name) || '';
check(h('x-content-type-options') === 'nosniff', 'X-Content-Type-Options: nosniff');
check(h('x-frame-options').toUpperCase() === 'DENY', 'X-Frame-Options: DENY');
check(h('referrer-policy') !== '', 'Referrer-Policy is set');
check(h('permissions-policy') !== '', 'Permissions-Policy is set');
check(h('cross-origin-opener-policy') === 'same-origin', 'Cross-Origin-Opener-Policy: same-origin');
const csp = h('content-security-policy');
check(
  csp.includes("default-src 'self'") &&
    csp.includes("object-src 'none'") &&
    csp.includes("frame-ancestors 'none'"),
  'Content-Security-Policy is set',
);
check(
  !/unsafe-eval/.test(csp) && !/script-src[^;]*unsafe-inline/.test(csp),
  'CSP allows no inline or eval scripts',
);
check(h('cache-control').includes('must-revalidate'), 'page is always re-checked (Cache-Control)');
if (script) {
  check(
    (await get(script)).headers.get('cache-control')?.includes('immutable'),
    'hashed files are cached for a year',
  );
}
if (live) {
  const hsts = h('strict-transport-security');
  const age = Number((hsts.match(/max-age=(\d+)/) || [])[1] || 0);
  check(age >= 15552000, 'Strict-Transport-Security lasts at least 6 months', hsts || 'missing');
} else {
  console.log(
    '  --   HSTS, certificate and https redirect are only checked against an https address',
  );
}

console.log(
  failed === 0 ? '\nAll good.\n' : `\n${failed} check${failed === 1 ? '' : 's'} failed.\n`,
);
process.exit(failed === 0 ? 0 : 1);
