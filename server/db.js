import bcrypt from "bcryptjs";
import { Pool } from "pg";
import { DATABASE_URL } from "./env.js";

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const servicesSeed = [
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

async function migrate(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'user',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS services (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      summary TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS service_bullets (
      id SERIAL PRIMARY KEY,
      service_id INTEGER NOT NULL REFERENCES services(id) ON DELETE CASCADE,
      text TEXT NOT NULL
    );
  `);
}

async function seedUsers(client) {
  const adminEmail = "admin@digitalwave.agency";
  const existing = await client.query(
    "SELECT id FROM users WHERE email = $1 LIMIT 1",
    [adminEmail]
  );
  if (existing.rowCount === 0) {
    const passwordHash = await bcrypt.hash("changeme123", 10);
    await client.query(
      `INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4)`,
      ["Admin DigitalWave", adminEmail, passwordHash, "admin"]
    );
  }
}

async function seedServices(client) {
  const countRow = await client.query(
    "SELECT COUNT(*)::int AS count FROM services"
  );
  if (countRow.rows[0]?.count > 0) return;

  for (const service of servicesSeed) {
    const { title, summary, bullets } = service;
    const inserted = await client.query(
      `INSERT INTO services (title, summary) VALUES ($1, $2) RETURNING id`,
      [title, summary]
    );
    const serviceId = inserted.rows[0].id;
    for (const bullet of bullets) {
      await client.query(
        `INSERT INTO service_bullets (service_id, text) VALUES ($1, $2)`,
        [serviceId, bullet]
      );
    }
  }
}

let initPromise;

async function init() {
  if (initPromise) return initPromise;
  initPromise = (async () => {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await migrate(client);
      await seedUsers(client);
      await seedServices(client);
      await client.query("COMMIT");
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  })();
  return initPromise;
}

export async function getDb() {
  await init();
  return pool;
}
