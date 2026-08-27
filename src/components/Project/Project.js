import React from "react";
import { ReactComponent as GithubSVG } from "./assets/github.svg";
import "./Project.css";

export default function Project({ projName, projDesc, githubLink, imgURL }) {
  const images = imgURL || [];

  return (
    <article className={"project" + (images.length ? "" : " project--text")}>
      <div className="project__copy">
        <h2 className="project__name">{projName}</h2>
        <p className="project__desc">{projDesc}</p>
        {githubLink && (
          <a className="project__repo" href={githubLink}>
            <GithubSVG className="project__repo-icon" />
            View the code on GitHub
          </a>
        )}
      </div>

      {images.length > 0 && (
        <div className="project__shots">
          {images.map((image) => (
            <img key={image} className="project__img" src={image} alt="" loading="lazy" />
          ))}
        </div>
      )}
    </article>
  );
}
