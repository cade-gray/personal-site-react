import React from "react";
import Reveal from "../../components/Reveal/Reveal";
import { BEYOND_CODE } from "../../data/stack";
import "./About.css";

const TOOLING = [
  {
    heading: "JavaScript / TypeScript / Node",
    items: [
      "React",
      "Svelte / SvelteKit",
      "Express for API development",
      "Building RESTful APIs",
      "PM2",
      "Deployment on Linux and Windows",
    ],
  },
  {
    heading: "SQL",
    items: [
      "Oracle, including ODBC connectivity",
      "SQL Server, including SSIS",
      "MySQL",
    ],
  },
  {
    heading: "Go",
    items: ["Building services that interact with APIs"],
  },
  {
    heading: "Everything else",
    items: ["PowerShell", "Bash scripting", "Java", "Docker"],
  },
];

export default function About() {
  return (
    <div className="about">
      <Reveal className="about__intro">
        <span className="eyebrow">About</span>
        <h1 className="about__title">
          I work where the vendor platforms end.
        </h1>
      </Reveal>

      <Reveal className="about__prose" delay={80}>
        <p>
          I work full time as a Systems Analyst for one of the United States'
          top credit unions, supporting critical financial applications and
          creating software solutions to grow the business, improve staff
          workflows, and empower teams to make data-driven decisions.
        </p>
        <p>
          I also work on the side, more as a hobby currently, as a software
          developer. I focus mostly in the web realm, creating web apps, web
          services, and software solutions for myself and others.
        </p>
      </Reveal>

      <section className="about__section">
        <Reveal>
          <span className="eyebrow">Languages, frameworks and tools</span>
          <h2 className="section__title">What I have developed with</h2>
        </Reveal>

        <div className="about__grid">
          {TOOLING.map((group, i) => (
            <Reveal key={group.heading} className="card about__group" delay={i * 70}>
              <h3 className="about__group-title">{group.heading}</h3>
              <ul className="about__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about__section">
        <Reveal>
          <span className="eyebrow">Beyond the code</span>
          <h2 className="section__title">
            What my career taught me that a repo cannot
          </h2>
        </Reveal>
        <Reveal className="about__pills" delay={80}>
          {["Applying technology in a financial context",
            "Financial software (Fiserv, MeridianLink, Jack Henry)",
            ...BEYOND_CODE].map((skill) => (
            <span key={skill} className="chip chip--pill">
              {skill}
            </span>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
