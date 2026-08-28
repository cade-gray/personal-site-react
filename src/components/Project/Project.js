import React from "react";
import { ReactComponent as GithubSVG } from "./assets/github.svg";
import PipelineDiagram from "../PipelineDiagram/PipelineDiagram";
import SHOTS from "../../images/shots";
import "./Project.css";

export default function Project({ name, tech, lead, detail, site, repo, image }) {
  const shot = image && SHOTS[image];
  const visual = image === "pipeline" ? <PipelineDiagram /> : null;
  const hasVisual = Boolean(shot || visual);

  return (
    <article className={"project" + (hasVisual ? "" : " project--text")}>
      <div className="project__copy">
        <h2 className="project__name">{name}</h2>
        {tech && <span className="project__tech">{tech}</span>}
        <p className="project__desc">{lead}</p>
        {detail && <p className="project__desc project__desc--detail">{detail}</p>}
        <div className="project__links">
          {site && (
            <a className="project__site" href={site}>
              Visit the site<span>→</span>
            </a>
          )}
          {repo && (
            <a className="project__repo" href={repo}>
              <GithubSVG className="project__repo-icon" />
              View the code on GitHub
            </a>
          )}
        </div>
      </div>

      {hasVisual && (
        <div className="project__visual">
          {shot ? (
            <img className="project__img" src={shot} alt={name + " screenshot"} loading="lazy" />
          ) : (
            visual
          )}
        </div>
      )}
    </article>
  );
}
