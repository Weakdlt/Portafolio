import { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/footer/Banner";
import Perfil from "./components/Perfil/Perfil";
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import './App.css';
import './index.css';

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;
    let pointerPosition = null;

    const hideCursorLight = () => {
      document.body.removeAttribute('data-cursor-light-active');
    };

    const handlePointerMove = (event) => {
      if (reducedMotion.matches || event.pointerType === 'touch') {
        hideCursorLight();
        return;
      }

      pointerPosition = { x: event.clientX, y: event.clientY };

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--cursor-x', `${pointerPosition.x}px`);
          document.documentElement.style.setProperty('--cursor-y', `${pointerPosition.y}px`);
          document.body.setAttribute('data-cursor-light-active', 'true');
          animationFrame = 0;
        });
      }
    };

    const handleMotionPreferenceChange = () => {
      if (reducedMotion.matches) {
        hideCursorLight();
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', hideCursorLight);
    reducedMotion.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', hideCursorLight);
      reducedMotion.removeEventListener('change', handleMotionPreferenceChange);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      hideCursorLight();
      document.documentElement.style.removeProperty('--cursor-x');
      document.documentElement.style.removeProperty('--cursor-y');
    };
  }, []);

  return (
    <>
      <div className="cursor-light" aria-hidden="true" />
      <Navbar />
      <main className="portfolio-main">
        <Banner />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
    </>
  )
}

export default App;
