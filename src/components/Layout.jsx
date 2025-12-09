import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main onClick={menuOpen ? () => setMenuOpen(false) : undefined}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
