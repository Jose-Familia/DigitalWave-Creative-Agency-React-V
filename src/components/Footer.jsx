function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
            </svg>
            <h3>DigitalWave</h3>
          </div>
          <p className="footer-tagline">
            Estrategia digital, diseño y tecnología para marcas que quieren
            crecer.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Servicios</h4>
            <ul>
              <li>Desarrollo Web</li>
              <li>Branding</li>
              <li>Marketing Digital</li>
              <li>UX/UI</li>
            </ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul>
              <li>Estrategia Digital</li>
              <li>Casos de éxito</li>
              <li>Guías y ebooks</li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>hola@digitalwave.agency</li>
              <li>+1 (800) 000-0000</li>
              <li>Latam / Remoto</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>
          © {new Date().getFullYear()} DigitalWave. Todos los derechos
          reservados.
        </p>
        <div className="footer-legal">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
