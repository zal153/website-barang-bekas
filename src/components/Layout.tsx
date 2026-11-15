import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { business } from "../business";
import { businessIcon } from "../utils/assets";
import { Icon } from "./Icon";
import { ModalDialog } from "./ModalDialog";
import { ScrollToTop } from "./ScrollToTop";
import { useApp } from "../context/AppContext";

export function Layout() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { openContact } = useApp();

  const closeMenu = () => setMobileMenu(false);

  return (
    <>
      <ScrollToTop />

      <div className="announcement">
        <Icon name="leaf" size={14} />
        <span>Bersama Slemania Rongsok, rongsokanmu masih bernilai.</span>
        <Link to="/cara-jual">Kenali cara kerjanya ↗</Link>
      </div>

      <header className="header">
        <div className="shell header-inner">
          <Link to="/" className="brand" aria-label="Slemania Rongsok, beranda" onClick={closeMenu}>
            <img
              src={businessIcon}
              alt="Slemania Rongsok"
              className="brand-logo-img"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Beranda
            </NavLink>
            <NavLink
              to="/material"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Jenis & harga rongsok
            </NavLink>
            <NavLink
              to="/cara-jual"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Cara jual
            </NavLink>
            <NavLink
              to="/estimasi"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Cek estimasi
            </NavLink>
            <NavLink
              to="/kontak"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Kontak & FAQ
            </NavLink>
          </nav>

          <div className="header-actions">
            <button
              className="button button-dark compact"
              onClick={() => openContact("WhatsApp")}
            >
              <Icon name="whatsapp" size={17} />
              Hubungi Slemania Rongsok
            </button>
            <button
              className="icon-button mobile-toggle"
              aria-label="Buka navigasi"
              aria-expanded={mobileMenu}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <Icon name={mobileMenu ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {mobileMenu && (
          <nav className="mobile-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "nav-active" : "")}
              onClick={closeMenu}
            >
              Beranda
              <Icon name="arrow" size={16} />
            </NavLink>
            <NavLink
              to="/material"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
              onClick={closeMenu}
            >
              Jenis & harga rongsok
              <Icon name="arrow" size={16} />
            </NavLink>
            <NavLink
              to="/cara-jual"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
              onClick={closeMenu}
            >
              Cara jual
              <Icon name="arrow" size={16} />
            </NavLink>
            <NavLink
              to="/estimasi"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
              onClick={closeMenu}
            >
              Cek estimasi
              <Icon name="arrow" size={16} />
            </NavLink>
            <NavLink
              to="/kontak"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
              onClick={closeMenu}
            >
              Kontak & FAQ
              <Icon name="arrow" size={16} />
            </NavLink>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="shell footer">
        <Link to="/" className="brand">
          <img
            src={businessIcon}
            alt="Slemania Rongsok"
            className="brand-logo-img"
          />
        </Link>
        <p>Slemania Rongsok — rongsokan berkurang, manfaat bertambah.</p>
        <span>
          © {new Date().getFullYear()} {business.name}. Beri nilai, sekali lagi.
        </span>
        <Link to="/kontak">Hubungi Slemania Rongsok ↗</Link>
      </footer>

      <ModalDialog />
    </>
  );
}
