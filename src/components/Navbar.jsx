import { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  const navLinks = ["Home", "About", "Menu", "Gallery"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          Millo <span>Café</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#reservation" className="nav-btn">
          Reserve a Table
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          <a
            href="#reservation"
            className="mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Reserve a Table
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;