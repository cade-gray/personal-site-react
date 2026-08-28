import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const NAV = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", href: "https://blog.cadegray.dev" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  React.useEffect(close, [location.pathname]);

  const navLink = (item, className) =>
    item.to ? (
      <Link key={item.label} to={item.to} className={className} onClick={close}>
        {item.label}
      </Link>
    ) : (
      <a key={item.label} href={item.href} className={className} onClick={close}>
        {item.label}
      </a>
    );

  return (
    <header className="header">
      <div className="header__bar">
        <Link to="/" className="wordmark" onClick={close}>
          Cade Gray
        </Link>

        <nav className="header__nav">
          {NAV.map((item) => navLink(item, "header__link"))}
          <a
            className="btn btn--primary header__cta"
            href="mailto:cadegrayweb@gmail.com"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={"header__bun" + (open ? " is-open" : "")} />
          <span className={"header__bun" + (open ? " is-open" : "")} />
          <span className={"header__bun" + (open ? " is-open" : "")} />
        </button>
      </div>

      {open && (
        <nav className="header__sheet">
          {NAV.map((item) => navLink(item, "header__sheet-link"))}
          <a
            className="btn btn--primary"
            href="mailto:cadegrayweb@gmail.com"
            onClick={close}
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
