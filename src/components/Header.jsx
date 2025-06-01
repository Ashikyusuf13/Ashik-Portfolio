import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            ASHIK
          </a>
        </div>
        {/* Desktop Navbar */}
        <ul
          className="nav__list desktop-navbar"
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
            marginBottom: 0,
            marginTop: 0,
            listStyle: "none",
          }}
        >
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#Project" className="nav__link">
              Project
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
        {/* Hamburger for mobile */}
        <div
          className="nav__toggle mobile-navbar"
          id="nav-toggle"
          style={{ display: "block" }}
        >
          <i
            className="bx bx-menu"
            style={{ fontSize: "2rem", cursor: "pointer", color: "#007bff" }}
            onClick={handleToggle}
          ></i>
        </div>
        {/* Side Navbar for mobile */}
        <div
          className={`nav__menu mobile-navbar${
            menuOpen ? " nav__menu--open" : ""
          }`}
          id="nav-menu"
          style={{
            position: "fixed",
            top: 0,
            right: menuOpen ? 0 : "-100vw",
            width: "70vw",
            height: "100vh",
            background: "rgba(255,255,255,0.97)",
            boxShadow: menuOpen ? "-2px 0 16px #0002" : "none",
            transition: "right 0.3s cubic-bezier(.4,0,.2,1)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: menuOpen ? "3rem 2rem" : 0,
            gap: "2rem",
            fontSize: "1.2rem",
            maxWidth: 320,
          }}
        >
          <button
            aria-label="Close menu"
            onClick={handleToggle}
            style={{
              background: "none",
              border: "none",
              fontSize: "2rem",
              alignSelf: "flex-end",
              marginBottom: "2rem",
              cursor: "pointer",
              color: "#007bff",
            }}
          >
            <i className="bx bx-x"></i>
          </button>
          <ul
            className="nav__list"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#Project"
                className="nav__link"
                onClick={handleLinkClick}
              >
                Project
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Overlay for closing menu when clicking outside */}
      {menuOpen && (
        <div
          onClick={handleToggle}
          className="mobile-navbar"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.2)",
            zIndex: 999,
          }}
        ></div>
      )}
      {/* Responsive CSS for navbar */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-navbar { display: none !important; }
          .mobile-navbar { display: block !important; }
        }
        @media (min-width: 769px) {
          .desktop-navbar { display: flex !important; }
          .mobile-navbar { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
