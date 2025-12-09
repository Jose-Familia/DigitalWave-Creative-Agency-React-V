import { useState } from "react";

const infoBlocks = [
  {
    title: "Respuesta en 24h",
    text: "Te devolvemos con un plan inicial y próximos pasos claros.",
  },
  {
    title: "Kickoff ágil",
    text: "Workshop de 90 minutos para alinear objetivos, stack y métricas.",
  },
  {
    title: "Equipo dedicado",
    text: "UX, desarrollo y marketing trabajando en un mismo roadmap.",
  },
];

const quickWins = [
  "Revisión express de tu stack y métricas",
  "Hoja de ruta de 30-60-90 días",
  "Recomendaciones priorizadas por impacto",
];

const channels = [
  {
    label: "Email",
    value: "hola@digitalwave.agency",
    href: "mailto:hola@digitalwave.agency",
  },
  {
    label: "Teléfono",
    value: "+1 (800) 000-0000",
    href: "tel:+18000000000",
  },
  { label: "Zona", value: "Remoto / Latam" },
];

function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      setError("Por favor completa los campos obligatorios.");
      return;
    }
    setError("");
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 600);
  };

  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <div className="section-header left">
            <div className="eyebrow">Contacto</div>
            <h2>Cuéntanos qué quieres lanzar o optimizar.</h2>
            <p>Responderemos en menos de 24 horas con un plan inicial.</p>
          </div>
          <div className="contact-highlights">
            <div className="info-card">
              <h4>Qué obtienes</h4>
              <ul className="contact-list">
                {quickWins.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="info-card compact">
              <h4>Agendamos rápido</h4>
              <p className="muted">Disponibilidad de lunes a viernes.</p>
              <div className="time-blocks">
                <span className="pill">Morning: 9-12</span>
                <span className="pill">Afternoon: 14-18</span>
                <span className="pill">Evening: 18-20</span>
              </div>
            </div>
          </div>
          <div className="contact-meta meta-panel">
            <div className="meta-header">
              <h4>Contacto directo</h4>
              <p className="muted">Elige tu canal preferido.</p>
            </div>
            <div className="meta-grid">
              {channels.map((c) => (
                <div key={c.label} className="meta-row">
                  <span className="meta-label">{c.label}</span>
                  {c.href ? (
                    <a className="meta-value" href={c.href}>
                      {c.value}
                    </a>
                  ) : (
                    <span className="meta-value">{c.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="info-grid">
            {infoBlocks.map((item) => (
              <div key={item.title} className="info-card mini">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card contact-card">
          <h3>Agenda una llamada</h3>
          <p>Déjanos tus datos y armamos la agenda.</p>
          <div className="contact-notes">
            <span className="pill">Respuesta en &lt;24h</span>
            <span className="pill">Coordinamos tu zona horaria</span>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Nombre *</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Andrea Gómez"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="andrea@empresa.com"
                  required
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+34 600 000 000"
                />
              </div>
              <div className="field">
                <label htmlFor="service">¿Qué servicio te interesa? *</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="branding">Branding & Identidad</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="ux">UX/UI & Producto</option>
                  <option value="consultoria">Consultoría</option>
                  <option value="soporte">Soporte y Evolución</option>
                </select>
                <p className="field-hint">
                  Preferencia para priorizar agenda y equipo.
                </p>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Cuéntanos sobre tu proyecto *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Contexto, metas, fechas y stack actual"
                required
              ></textarea>
              <p className="field-hint">
                Compartir KPIs o deadlines nos ayuda a responder mejor.
              </p>
            </div>

            {error && <div className="form-error">{error}</div>}
            {status === "sent" && (
              <div className="form-success">
                ¡Gracias! Te contactamos muy pronto.
              </div>
            )}

            <button
              className="btn btn-primary"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
