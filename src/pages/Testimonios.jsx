const testimonials = [
  {
    name: "Ana Rodríguez",
    role: "Head of Growth, Ecommerce",
    result: "+42% revenue orgánico en 3 meses",
    quote:
      "Su enfoque en experimentación y performance hizo que cada sprint tuviera impacto directo en ventas.",
  },
  {
    name: "Miguel Herrera",
    role: "CTO, HealthTech",
    result: "-35% tiempo de carga / +19% activación",
    quote:
      "Modernizaron nuestra web a Jamstack y mejoraron el onboarding sin afectar el roadmap de producto.",
  },
  {
    name: "Sofía Delgado",
    role: "COO, SaaS Series A",
    result: "Churn inicial -22% en 6 semanas",
    quote:
      "Mapearon fricciones clave, probaron nuevas UX y lanzaron mejoras con un equipo ágil y senior.",
  },
  {
    name: "Daniel Paredes",
    role: "Marketing Lead, B2B",
    result: "+31% leads calificados / CPL -18%",
    quote:
      "Optimizaron landings, tracking y copy. Reportes claros y decisiones basadas en datos.",
  },
  {
    name: "Valeria Campos",
    role: "Founder, EdTech",
    result: "Lanzamiento en 6 semanas",
    quote:
      "Blueprint completo: branding, UX/UI y desarrollo listo para escalar. Comunicación transparente.",
  },
  {
    name: "Carlos Núñez",
    role: "CMO, Fintech",
    result: "+38% conversión en funnel",
    quote:
      "Implementaron analítica, nuevos mensajes y páginas de producto. Iteraciones rápidas y medibles.",
  },
];

function Testimonios() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Testimonios</div>
          <h2>Confianza respaldada por resultados.</h2>
          <p>
            Equipos de marketing, producto y tecnología ya trabajan con
            DigitalWave.
          </p>
        </div>
        <div className="cards-grid testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.name} className="card testimonial-card">
              <p className="quote">“{item.quote}”</p>
              <div className="author">
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                  <div className="author-result">{item.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
