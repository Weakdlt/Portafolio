import { useState } from 'react';
import miFoto from '../../assets/miFoto.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="site-sidebar">
      <div className="sidebar-mobile-header">
        <a className="navbar-logo" href="#inicio" onClick={() => setIsOpen(false)}>
          <span className="text-cyan">Daniel</span> Leon
        </a>
        <button
          className="navbar-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="sidebar-profile">
        <a className="sidebar-photo-link" href="#inicio" aria-label="Ir al inicio">
          <img src={miFoto} alt="Daniel Leon" className="sidebar-photo" />
        </a>
        <a className="sidebar-name" href="#inicio" onClick={() => setIsOpen(false)}>
          Daniel Leon
        </a>
        <p className="sidebar-role">Estudiante de Ingeniería de Software con IA</p>
        <p className="sidebar-description">
          Aprendiendo a crear soluciones digitales, una línea de código a la vez.
        </p>
      </div>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`} aria-label="Navegación principal">
        <a href="#sobre-mi" onClick={() => setIsOpen(false)}>
          <span>01</span> Perfil
        </a>
        <a href="#tech-stack" onClick={() => setIsOpen(false)}>
          <span>02</span> Tech Stack
        </a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>
          <span>03</span> Proyectos
        </a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>
          <span>04</span> Contacto
        </a>
      </nav>

      <div className="sidebar-footer">
        <span className="sidebar-status-dot" aria-hidden="true"></span>
        <span>Lima, Perú</span>
        <span className="sidebar-footer-divider">/</span>
        <span>Disponible</span>
      </div>
    </aside>
  );
};

export default Navbar;