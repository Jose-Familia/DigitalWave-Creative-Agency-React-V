import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchProfile, login as apiLogin } from "../api/client";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("dw_token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(Boolean(token));
  const [error, setError] = useState(null);

  useEffect(() => {
    async function bootstrap() {
      if (!token) return setLoading(false);
      try {
        const data = await fetchProfile(token);
        setUser(data.user);
      } catch (err) {
        setToken(null);
        localStorage.removeItem("dw_token");
      } finally {
        setLoading(false);
      }
    }
    bootstrap();
  }, [token]);

  const login = useCallback(async (email, password) => {
    setError(null);
    const data = await apiLogin(email, password);
    setToken(data.token);
    localStorage.setItem("dw_token", data.token);
    setUser(data.user);
    return data.user;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("dw_token");
  }, []);

  const value = useMemo(
    () => ({ user, token, loading, error, login, logout, setError }),
    [user, token, loading, error, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return ctx;
}
