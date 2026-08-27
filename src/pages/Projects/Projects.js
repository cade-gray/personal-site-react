import React, { useEffect, useState } from "react";
import Reveal from "../../components/Reveal/Reveal";
import Project from "../../components/Project/Project";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let live = true;
    fetch("https://api.cadegray.dev/projects")
      .then((response) => response.json())
      .then((data) => {
        if (!live) return;
        setProjects(Array.isArray(data) ? data : []);
        setStatus("ready");
      })
      .catch(() => live && setStatus("error"));
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="projects">
      <Reveal className="projects__head">
        <span className="eyebrow">Projects</span>
        <h1 className="projects__title">Things I built and still run</h1>
        <p className="projects__lead">
          Everything here is mine end to end — designed, built, deployed and
          maintained. Most of it is still in use.
        </p>
      </Reveal>

      <div className="projects__list">
        {status === "loading" &&
          [0, 1, 2].map((i) => <div key={i} className="projects__skeleton" />)}

        {status === "error" && (
          <p className="projects__error">
            Couldn’t reach the projects API just now. Try a refresh, or find the
            code on <a href="https://github.com/cade-gray">GitHub</a>.
          </p>
        )}

        {status === "ready" &&
          projects.map((project, i) => (
            <Reveal key={project.projectId} delay={(i % 3) * 70}>
              <Project
                projName={project.projectName}
                projDesc={project.projectDescription}
                githubLink={project.projectRepo}
                imgURL={project.projectImg ? [project.projectImg] : []}
              />
            </Reveal>
          ))}
      </div>
    </div>
  );
}
