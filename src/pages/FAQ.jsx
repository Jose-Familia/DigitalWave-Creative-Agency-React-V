const categories = [
  {
    title: "Desarrollo Web",
    faqs: [
      {
        q: "¿Cuánto tarda un proyecto web?",
        a: "Entre 4 y 8 semanas según alcance. Definimos un MVP y entregas quincenales.",
      },
      {
        q: "¿Trabajan con CMS?",
        a: "Sí, implementamos headless (Sanity/Contentful) o CMS ligeros según la necesidad.",
      },
      {
        q: "¿Incluye SEO técnico?",
        a: "Sí, configuramos performance, metadatos, sitemap, schema y tracking.",
      },
    ],
  },
  {
    title: "Proceso y Precios",
    faqs: [
      {
        q: "¿Cómo estiman un proyecto?",
        a: "Workshop inicial, definición de objetivos, backlog priorizado y propuesta cerrada.",
      },
      {
        q: "¿Formas de trabajo?",
        a: "Proyecto cerrado o equipo dedicado mensual con sprints y métricas.",
      },
      {
        q: "¿Qué incluye el kickoff?",
        a: "Personas clave, métricas base, stack actual y roadmap de experimentos.",
      },
    ],
  },
  {
    title: "Soporte y Mantenimiento",
    faqs: [
      {
        q: "¿Dan soporte después de lanzar?",
        a: "Sí, planes de evolución con monitoreo, fixes y mejoras continuas.",
      },
      {
        q: "¿Cómo gestionan incidencias?",
        a: "SLA acordado, canal dedicado y tablero de soporte visible.",
      },
    ],
  },
  {
    title: "Marketing y SEO",
    faqs: [
      {
        q: "¿Gestionan campañas?",
        a: "Sí, performance marketing con dashboards y experimentos continuos.",
      },
      {
        q: "¿Hacen research de palabras clave?",
        a: "Incluimos research, clustering y contenido priorizado.",
      },
    ],
  },
  {
    title: "Diseño y Branding",
    faqs: [
      {
        q: "¿Pueden refrescar mi marca?",
        a: "Sí, identidad visual, sistema de diseño y guías para equipos internos.",
      },
      {
        q: "¿Entregan design system?",
        a: "Componentes documentados listos para desarrollo.",
      },
    ],
  },
];

function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">FAQ</div>
          <h2>Preguntas frecuentes.</h2>
          <p>Lo esencial sobre procesos, tiempos y soporte.</p>
        </div>
        <div className="faq-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="faq-column">
              <h3>{cat.title}</h3>
              <div className="faq-items">
                {cat.faqs.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
