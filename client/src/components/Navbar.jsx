import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap">
        <a href="#home" className="brand">
          Jahangir<span>.</span>
        </a>

        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="mobile-links">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
