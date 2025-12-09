# DigitalWave SPA (React + Vite)

Single Page Application de DigitalWave con routing, tema claro/oscuro, navegación móvil y páginas de marketing.

## Scripts

- `npm run dev` – servidor de desarrollo (http://localhost:5173)
- `npm run build` – build de producción en `dist/`
- `npm run preview` – previsualiza el build
- `npm run lint` – linting con ESLint

## Estructura

- `src/App.jsx` – rutas y layout principal
- `src/context/ThemeContext.jsx` – tema claro/oscuro con persistencia
- `src/components/` – Header, Footer, Layout, ScrollToTop
- `src/pages/` – Inicio, Servicios, Testimonios, FAQ, Contacto
- `src/index.css` – estilos consolidados y responsive

## Notas

- Usa React Router para SPA completa.
- Menú hamburguesa y select del formulario con estilos accesibles.
- Tema guardado en `localStorage` (`dw-theme`).

## Backend (Express + SQLite)

- `npm run dev:server` – inicia el API en `http://localhost:4000`
- Variables en `.env` (ver `.env.example`): `PORT`, `CLIENT_ORIGIN`, `JWT_SECRET`, `DATABASE_URL`, `VITE_API_URL`
- DB: Postgres (usa `DATABASE_URL`, por defecto apunta a Neon). Si cambias la URL, requiere SSL.
- Rutas: `POST /api/auth/login`, `GET /api/auth/me`, `GET /api/services`
- Usuario inicial: `admin@digitalwave.agency` / `changeme123`
