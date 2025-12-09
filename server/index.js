import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { CLIENT_ORIGIN, JWT_SECRET, PORT } from "./env.js";
import { getDb } from "./db.js";

function buildToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
}

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token requerido" });
  }

  const token = header.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}

const app = express();

const allowedOrigins = (CLIENT_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Permite requests sin origin (curl/postman) y los que estén en la lista.
      if (!origin || allowedOrigins.includes(origin))
        return callback(null, true);
      return callback(new Error("Origen no permitido"));
    },
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, status: "healthy" });
});

app.get("/api/services", async (_req, res) => {
  try {
    const db = await getDb();
    const { rows } = await db.query(
      `SELECT s.id, s.title, s.summary, sb.text as bullet
       FROM services s
       LEFT JOIN service_bullets sb ON sb.service_id = s.id
       ORDER BY s.id ASC, sb.id ASC`
    );

    const services = rows.reduce((acc, row) => {
      const current = acc.get(row.id) || {
        id: row.id,
        title: row.title,
        summary: row.summary,
        bullets: [],
      };
      if (row.bullet) current.bullets.push(row.bullet);
      acc.set(row.id, current);
      return acc;
    }, new Map());

    res.json({ services: Array.from(services.values()) });
  } catch (err) {
    res.status(500).json({ message: "Error obteniendo servicios" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Correo y contraseña son requeridos" });
  }

  try {
    const db = await getDb();
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = rows[0];
    if (!user)
      return res.status(401).json({ message: "Credenciales inválidas" });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid)
      return res.status(401).json({ message: "Credenciales inválidas" });

    const token = buildToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "No pudimos iniciar sesión" });
  }
});

app.get("/api/auth/me", authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const { rows } = await db.query(
      "SELECT id, name, email, role FROM users WHERE id = $1",
      [req.user.id]
    );
    const user = rows[0];
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Error recuperando usuario" });
  }
});

const dbReady = getDb();
await dbReady;

app.listen(PORT, () => {
  console.log(`API lista en http://localhost:${PORT}`);
});

// Manejo de errores global para devolver JSON y loguear detalles.
// Útil para depurar "Failed to fetch" desde el cliente.
app.use((err, _req, res, _next) => {
  console.error("API error:", err?.message || err);
  if (err?.message === "Origen no permitido") {
    return res.status(403).json({ message: "Origen no permitido" });
  }
  return res.status(500).json({ message: "Error interno" });
});
