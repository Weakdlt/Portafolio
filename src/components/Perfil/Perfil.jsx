import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <p className="section-kicker">01 / Perfil</p>
        <h2 className="section-title">Un poco sobre mí</h2>

        <div className="sobre-mi-grid">

          {/* =========================================
              TARJETA 1: PERFIL PROFESIONAL
          ========================================= */}
          <div className="card">
            <div className="card-header">
              {/* Ícono de Usuario (SVG) */}
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4
4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>

            <p className="card-text">
              Soy estudiante de Ingeniería de Software con Inteligencia
              Artificial en SENATI y estoy desarrollando mis habilidades como
              programador. Me interesa crear soluciones digitales útiles,
              escribir código claro y aprender nuevas tecnologías.
              <br /><br />
              Actualmente estoy aprendiendo Python y fortaleciendo mis bases
              de programación, desarrollo de software e inteligencia artificial.
            </p>
          </div>

          {/* =========================================
              TARJETA 2: EDUCACIÓN
          ========================================= */}
          <div className="card">
            <div className="card-header">
              {/* Ícono de Educación / Sombrero (SVG) */}
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educación</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Ingeniería de Software con Inteligencia Artificial</h4>
                  <span className="badge badge-outline">En curso</span>
                </div>
                <span className="timeline-date">SENATI</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Perfil;