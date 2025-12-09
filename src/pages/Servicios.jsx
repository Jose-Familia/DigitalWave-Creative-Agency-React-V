import { useEffect, useState } from "react";
import { fetchServices } from "../api/client";

function Servicios() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchServices();
        setServices(data.services || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

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
        {loading ? (
          <div className="card service-card">Cargando servicios...</div>
        ) : error ? (
          <div className="card service-card error">{error}</div>
        ) : (
          <div className="cards-grid services-grid">
            {services.map((service) => (
              <div
                key={service.id || service.title}
                className="card service-card"
              >
                <div className="card-header">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <ul className="card-list">
                  {(service.bullets || []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Servicios;
