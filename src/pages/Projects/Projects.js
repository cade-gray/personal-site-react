import React from "react";
import Reveal from "../../components/Reveal/Reveal";
import Project from "../../components/Project/Project";
import { PROJECTS } from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <Reveal className="projects__head">
        <span className="eyebrow">Projects</span>
        <h1 className="projects__title">Things I built and still run</h1>
        <p className="projects__lead">
          Everything here is mine end to end: designed, built, deployed and
          maintained. All of it is still in use.
        </p>
      </Reveal>

      <div className="projects__list">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 70}>
            <Project {...project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
