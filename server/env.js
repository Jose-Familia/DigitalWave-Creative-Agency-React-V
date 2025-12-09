import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const JWT_SECRET =
  process.env.JWT_SECRET || "dev-secret-change-this-in-production";
export const CLIENT_ORIGIN =
  process.env.CLIENT_ORIGIN || "http://localhost:5173";
export const DATABASE_URL = process.env.DATABASE_URL || "";
