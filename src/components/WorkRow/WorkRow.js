import React, { useState } from "react";
import { ReactComponent as GithubSVG } from "./assets/github.svg";
import "./WorkRow.css";

/*
 * Splits a description into a lead the row shows collapsed and the remainder
 * revealed by the toggle. Breaks on a sentence boundary so neither half reads
 * like it was cut off.
 */
export function splitDescription(text, target = 240) {
  const full = (text || "").trim();
  if (full.length <= target) return [full, ""];

  const boundary = /[.!?]\s+/g;
  let cut = -1;
  let match = boundary.exec(full);
  while (match) {
    const end = match.index + 1;
    if (end >= target) {
      cut = end;
      break;
    }
    cut = end;
    match = boundary.exec(full);
  }
  if (cut <= 0 || cut >= full.length) return [full, ""];
  return [full.slice(0, cut).trim(), full.slice(cut).trim()];
}

export default function WorkRow({ num, name, description, repo, tech }) {
  const [open, setOpen] = useState(false);
  const [lead, rest] = splitDescription(description);

  return (
    <article className="work-row">
      <div className="work-row__head">
        <span className="work-row__num">{num}</span>
        <h3 className="work-row__name">{name}</h3>
        {tech && <span className="work-row__tech">{tech}</span>}
      </div>

      <div className="work-row__body">
        <p className="work-row__lead">{lead}</p>

        {open && rest && <p className="work-row__rest">{rest}</p>}

        <div className="work-row__actions">
          {rest && (
            <button
              type="button"
              className="work-row__toggle"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? "Show less ↑" : "How it works ↓"}
            </button>
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
