import React, { useState } from "react";
import { ReactComponent as GithubSVG } from "./assets/github.svg";
import "./WorkRow.css";

export default function WorkRow({ num, name, tech, lead, detail, repo, site }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="work-row">
      <div className="work-row__head">
        <span className="work-row__num">{num}</span>
        <h3 className="work-row__name">{name}</h3>
        {tech && <span className="work-row__tech">{tech}</span>}
      </div>

      <div className="work-row__body">
        <p className="work-row__lead">{lead}</p>

        {open && detail && <p className="work-row__rest">{detail}</p>}

        <div className="work-row__actions">
          {detail && (
            <button
              type="button"
              className="work-row__toggle"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? "Show less ↑" : "How it works ↓"}
            </button>
          )}
          {site && (
            <a className="work-row__site" href={site}>
              Visit the site<span>→</span>
            </a>
          )}
          {repo && (
            <a className="work-row__repo" href={repo}>
              <GithubSVG className="work-row__repo-icon" />
              View the code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
