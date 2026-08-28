import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__credit">
        Built with <a href="https://reactjs.org/">React</a>, hosted on{" "}
        <a href="https://www.digitalocean.com/">DigitalOcean</a>.
      </p>
      <div className="footer__links">
        <a href="https://github.com/cade-gray/personal-site-react">
          Source on GitHub
        </a>
        <a href="mailto:cadegrayweb@gmail.com">cadegrayweb@gmail.com</a>
      </div>
    </footer>
  );
}
