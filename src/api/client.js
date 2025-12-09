const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

async function request(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || "Ocurrió un error";
    throw new Error(message);
  }
  return data;
}

export function login(email, password) {
  return request("/auth/login", { method: "POST", body: { email, password } });
}

export function fetchProfile(token) {
  return request("/auth/me", { token });
}

export function fetchServices() {
  return request("/services");
}
