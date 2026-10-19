import './Banner.css';

const Banner = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <p className="section-kicker hero-kicker">Desarrollador en formación</p>

        <h1 className="hero-title">
          Creo soluciones con <span className="hero-name-accent">código.</span>
        </h1>

        <div className="hero-stack" aria-label="Formación y conocimientos">
          <span className="hero-stack-label">Ingeniería de Software con IA</span>
          <span className="hero-stack-divider" aria-hidden="true">/</span>
          <span className="hero-stack-label">Python Basics</span>
        </div>

        <p className="hero-description">
          Soy programador en formación y disfruto crear soluciones digitales
          claras y funcionales. Actualmente desarrollo mis habilidades en
          ingeniería de software, inteligencia artificial y programación con Python.
        </p>

    </div>
  </section>
  );
};

export default Banner;