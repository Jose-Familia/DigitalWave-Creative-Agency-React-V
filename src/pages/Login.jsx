import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login, error, setError, loading, user } = useAuth();
  const [email, setEmail] = useState("admin@digitalwave.agency");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true });
    }
  }, [loading, user, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setError?.(null);
    setSubmitting(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError?.(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return null;

  return (
    <section className="section auth-section">
      <div className="container auth-card">
        <div>
          <div className="eyebrow">Acceso</div>
          <h2>Inicia sesión</h2>
          <p>Usa las credenciales asignadas para gestionar servicios.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            <span>Correo</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@empresa.com"
            />
          </label>
          <label>
            <span>Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </label>
          {error ? <div className="auth-error">{error}</div> : null}
          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Validando..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
