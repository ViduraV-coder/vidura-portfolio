import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Ribbons from './components/Ribbons';
import Toolkit from './components/Toolkit';
import Work from './components/Work';
import SharedDefs from './components/art/SharedDefs';
import StoryBackdrop from './components/art/StoryBackdrop';
import StorySparkles from './components/art/StorySparkles';
import usePauseOffscreenSvg from './hooks/usePauseOffscreenSvg';
import useMotion from './hooks/useMotion';
import useReducedMotion from './hooks/useReducedMotion';

export default function App() {
  useReducedMotion();
  useMotion();
  usePauseOffscreenSvg();

  return (
    <>
      <Cursor />
      <div className="site">
        <SharedDefs />
        <main>
          <Hero />
          <Ribbons />
          <About />
          {/* work, toolkit, journey and contact all sit on one long night sky */}
          <div className="story" id="story">
            <StoryBackdrop />
            <StorySparkles />
            <Work />
            <Toolkit />
            <Journey />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}
