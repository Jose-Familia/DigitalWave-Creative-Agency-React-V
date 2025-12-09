import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/faq", label: "FAQ" },
  { to: "/contacto", label: "Contacto" },
];

function Header({ menuOpen, setMenuOpen }) {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="main-nav container">
        <Link className="logo" to="/" aria-label="DigitalWave Inicio">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
          </svg>
          <span>DigitalWave</span>
        </Link>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-label="Menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`nav-links ${menuOpen ? "active" : ""}`}
          role="navigation"
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="auth-chip">
            {user ? (
              <div className="auth-chip__inner">
                <span>{user.name}</span>
                <button type="button" onClick={logout}>
                  Salir
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Ingresar
              </NavLink>
            )}
          </li>
          <li className="theme-toggle-wrapper">
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Cambiar a tema ${
                theme === "dark" ? "claro" : "oscuro"
              }`}
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={`nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      ></div>
    </header>
  );
}

export default Header;
