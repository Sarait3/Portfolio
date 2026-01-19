import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-90px 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar nav-pill">

          <a href="#home" className="brand" onClick={() => setOpen(false)}>
            <img src={logo} alt="Sara Aithssayene's Portfolio" className="brand-logo" />
            <span className="brand-text">Sara Aithssayene</span>
          </a>

          <ul className={`nav-menu ${open ? "active" : ""}`}>
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${active === "home" ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${active === "about" ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                My Journey
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                className={`nav-link ${active === "skills" ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                My Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#projects"
                className={`nav-link ${active === "projects" ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                My Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${active === "contact" ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
              Contact Me
            </a>

            <button
              className={`menu-toggle ${open ? "active" : ""}`}
              onClick={() => setOpen((v) => !v)}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
