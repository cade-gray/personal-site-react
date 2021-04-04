import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <h3>
        Contact:{" "}
        <a href="mailto:cadegrayweb@gmail.com">cadegrayweb@gmail.com</a>
      </h3>
      <p>
        Website developed Using <a href={"https://reactjs.org/"}>React</a>.
        Hosted on <a href={"https://www.digitalocean.com/"}>DigitalOcean</a>.
      </p>
      <p>
        View this site's code on{" "}
        <a href={"https://github.com/cade-gray/personal-site-v2"}>GitHub</a>.
      </p>
    </div>
  );
}
