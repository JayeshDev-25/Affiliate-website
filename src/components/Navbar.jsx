import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ darkMode, onToggleDark, searchQuery, onSearchChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  const navLinks = [
    { href: "#featured", label: "Featured" },
    { href: "#products", label: "Products" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <a href="#" className="nav-logo" onClick={closeAll} aria-label="Budget Tech Picks home">
            <div className="logo-mark" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
                <rect x="11" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
                <rect x="2" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
                <rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
              </svg>
            </div>
            <span>Budget <span className="logo-accent">Picks</span> </span>
          </a>

          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {/* Search bar */}
            <div className={`nav-search ${searchOpen ? "search-open" : ""}`}>
              <input
                type="search"
                placeholder="Search products…"
                className="nav-search-input"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search products"
              />
              <button
                className="nav-icon-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label={searchOpen ? "Close search" : "Open search"}
              >
                {searchOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                )}
              </button>
            </div>

            {/* Dark mode toggle */}
            <button
              className="nav-icon-btn"
              onClick={onToggleDark}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="bar" /><span className="bar" /><span className="bar" />
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="mobile-search" role="search">
            <input
              type="search"
              placeholder="Search products…"
              className="mobile-search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              autoFocus
              aria-label="Search products"
            />
          </div>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`} role="dialog" aria-label="Mobile navigation">
        <ul className="mobile-nav-list" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="mobile-nav-link" onClick={closeAll}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <p className="mobile-disclaimer">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;