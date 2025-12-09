import { Link } from "react-router-dom";

const servicesPreview = [
  {
    title: "Desarrollo Web",
    description: "Sitios rápidos, seguros y optimizados para conversión.",
    bullets: [
      "Performance y SEO técnico",
      "Headless / Jamstack",
      "Implementación y analytics",
    ],
  },
  {
    title: "Branding & UX/UI",
    description:
      "Identidades consistentes y experiencias centradas en el usuario.",
    bullets: [
      "Guía de marca y tono",
      "Design systems escalables",
      "Prototipos listos para dev",
    ],
  },
  {
    title: "Marketing Digital",
    description: "Aceleramos adquisición con campañas multicanal.",
    bullets: [
      "Paid Media y SEO",
      "Automations y nurturing",
      "Dashboards accionables",
    ],
  },
];

const steps = [
  {
    title: "Diagnóstico",
    text: "Workshop de descubrimiento, objetivos y KPIs claros.",
  },
  {
    title: "Estrategia",
    text: "Roadmap priorizado y prototipos para validar rápido.",
  },
  {
    title: "Implementación",
    text: "Desarrollo ágil con entregas iterativas y QA continuo.",
  },
  {
    title: "Optimización",
    text: "Medición, experimentos y mejoras continuas.",
  },
];

const testimonials = [
  {
    name: "Laura Méndez",
    role: "CMO, Fintech Latam",
    quote:
      "DigitalWave elevó nuestra conversión un 38% en 8 semanas. Organización impecable y foco en resultados.",
  },
  {
    name: "Carlos Ortega",
    role: "CEO, SaaS B2B",
    quote:
      "El nuevo onboarding redujo el churn inicial en 22%. Equipo senior que entiende negocio y producto.",
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="badge">Agencia digital full-stack</div>
            <h1>Webs y experiencias que convierten más.</h1>
            <p>
              Estrategia, diseño y tecnología para marcas que quieren crecer.
              Construimos productos digitales, optimizamos funnels y lanzamos
              campañas medibles.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contacto">
                Agenda una demo
              </Link>
              <Link className="btn btn-secondary" to="/servicios">
                Ver servicios
              </Link>
            </div>
            <div className="hero-metrics">
              <div>
                <span className="metric-number">+120</span>
                <span className="metric-label">Proyectos lanzados</span>
              </div>
              <div>
                <span className="metric-number">38%</span>
                <span className="metric-label">
                  Lift promedio en conversión
                </span>
              </div>
              <div>
                <span className="metric-number">24/7</span>
                <span className="metric-label">Soporte y monitoreo</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <h3>Launchpad DigitalWave</h3>
            <p>
              Blueprint listo en 14 días: research, UX, copy y plan de medios.
            </p>
            <ul>
              <li>Auditoría técnica y SEO</li>
              <li>Arquitectura de información</li>
              <li>Wireframes + diseño UI</li>
              <li>Plan de experimentación</li>
            </ul>
            <Link className="btn btn-primary" to="/contacto">
              Solicitar blueprint
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Lo que hacemos</div>
            <h2>Servicios que integran estrategia, diseño y growth.</h2>
            <p>
              Equipos multidisciplinarios para lanzar rápido, medir y escalar.
            </p>
          </div>
          <div className="cards-grid">
            {servicesPreview.map((service) => (
              <div key={service.title} className="card service-card">
                <div className="card-header">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ul className="card-list">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="link" to="/servicios">
                  Ver más
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Cómo trabajamos</div>
            <h2>Un proceso claro y medible.</h2>
            <p>
              Desde el diagnóstico hasta la optimización continua, siempre con
              indicadores.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step, idx) => (
              <div key={step.title} className="step-card">
                <div className="step-number">{idx + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Testimonios</div>
            <h2>Resultados que hablan.</h2>
            <p>Historias reales de equipos que crecieron con DigitalWave.</p>
          </div>
          <div className="cards-grid testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="card testimonial-card">
                <p className="quote">“{item.quote}”</p>
                <div className="author">
                  <div>
                    <div className="author-name">{item.name}</div>
                    <div className="author-role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow">Hablemos</div>
            <h2>Listo para subir la marea digital.</h2>
            <p>
              Agendemos una llamada de 30 minutos para mapear oportunidades.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary" to="/contacto">
              Agenda una llamada
            </Link>
            <Link className="btn btn-secondary" to="/servicios">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
