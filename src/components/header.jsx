import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-wrapper">
        <div className="logo">
          <NavLink to="/">
            <img src="/logo.jfif" alt="Børnelejren logo" />
            <span>BØRNELEJREN PÅ LANGELAND</span>
          </NavLink>
        </div>

        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={isOpen ? "open" : ""}>
          <ul>
            <li>
              <NavLink to="/" end>
                Forside
              </NavLink>
            </li>
            <li>
              <NavLink to="/om-os">Om os</NavLink>
            </li>
            <li>
              <NavLink to="/tilmeld-sponsor">Tilmeld som sponsor</NavLink>
            </li>
            <li>
              <NavLink to="/boernelejren-takker">Tak</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
