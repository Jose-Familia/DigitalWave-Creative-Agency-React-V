import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Testimonios from "./pages/Testimonios";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
