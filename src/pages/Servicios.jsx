const services = [
  {
    title: "Desarrollo Web",
    summary: "Sitios y landings optimizadas para performance, seguridad y SEO.",
    bullets: [
      "Arquitectura headless / Jamstack",
      "Performance y Core Web Vitals",
      "Integraciones con CRM y analítica",
    ],
  },
  {
    title: "Branding & Identidad",
    summary: "Narrativa, tono y sistema visual coherente para cada touchpoint.",
    bullets: [
      "Sistema de diseño y guías de marca",
      "Logo, paleta y tipografía",
      "Biblioteca de componentes UI",
    ],
  },
  {
    title: "Marketing Digital",
    summary: "Campañas multicanal con foco en adquisición y retorno.",
    bullets: [
      "Paid media (Meta/Google/LinkedIn)",
      "SEO on-page y técnico",
      "Automations y scoring de leads",
    ],
  },
  {
    title: "UX/UI & Producto",
    summary: "Experiencias centradas en el usuario listas para desarrollo.",
    bullets: [
      "Research y mapas de experiencia",
      "Wireframes, prototipos y testing",
      "Design handoff para devs",
    ],
  },
  {
    title: "Consultoría y Growth",
    summary: "Estrategia, métricas y experimentos continuos para crecer.",
    bullets: [
      "Definición de KPIs y dashboards",
      "Experimentación A/B",
      "Planes trimestrales de optimización",
    ],
  },
  {
    title: "Soporte y Evolución",
    summary: "Monitoreo, mantenimiento y mejoras sin fricción.",
    bullets: [
      "Monitoreo uptime y alertas",
      "Backups y seguridad",
      "Sprints mensuales de mejora",
    ],
  },
];

function Servicios() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Servicios</div>
          <h2>Equipos completos, resultados medibles.</h2>
          <p>
            Selecciona el frente que quieres escalar; nosotros ponemos al equipo
            y el proceso.
          </p>
        </div>
        <div className="cards-grid services-grid">
          {services.map((service) => (
            <div key={service.title} className="card service-card">
              <div className="card-header">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
              <ul className="card-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
