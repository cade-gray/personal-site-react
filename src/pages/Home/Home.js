import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import StackGrid from "../../components/StackGrid/StackGrid";
import WorkRow from "../../components/WorkRow/WorkRow";
import { BEYOND_CODE, CAPABILITIES } from "../../data/stack";
import { PROJECTS } from "../../data/projects";
import "./Home.css";

const EMAIL = "mailto:cadegrayweb@gmail.com";

export default function Home() {
  return (
    <div className="home">
      {/* Hero ---------------------------------------------------------- */}
      <section className="hero">
        <div className="glow hero__glow" />

        <div className="hero__intro">
          <Reveal as="p" className="hero__eyebrow" delay={60}>
            <span className="hero__dot" />
            Systems Analyst · Software Developer
          </Reveal>

          {/* The hero reads as a statement rather than a headline, but the
              document still needs one level-one heading. */}
          <h1 className="visually-hidden">
            Cade Gray, Systems Analyst and Software Developer
          </h1>

          <Reveal as="p" className="hero__lead" delay={140}>
            Systems Analyst at one of the top credit unions in the U.S. The
            vendor platforms a financial institution runs on were never built to
            talk to each other. I build what goes between them, and the web
            apps, APIs and tooling around them.
          </Reveal>

          <Reveal className="hero__actions" delay={220}>
            <Link className="btn btn--primary" to="/projects">
              See selected work
            </Link>
            <a className="btn btn--ghost" href={EMAIL}>
              cadegrayweb@gmail.com
            </a>
          </Reveal>

          <Reveal delay={300}>
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal className="currently" delay={380}>
          <p className="currently__head">
            <span className="hero__dot" />
            Currently
          </p>
          <dl className="currently__list">
            <div className="currently__row">
              <dt>Role</dt>
              <dd>Systems Analyst, credit union IT</dd>
            </div>
            <div className="currently__row">
              <dt>Building</dt>
              <dd>PlateFind, Jokedle, and a Go API template</dd>
            </div>
            <div className="currently__row">
              <dt>Writing</dt>
              <dd>
                <a href="https://blog.cadegray.dev">blog.cadegray.dev</a>
              </dd>
            </div>
            <div className="currently__row">
              <dt>Code</dt>
              <dd>
                <a href="https://github.com/cade-gray">github.com/cade-gray</a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* What I do ----------------------------------------------------- */}
      <section className="section capabilities">
        {CAPABILITIES.map((item, i) => (
          <Reveal key={item.num} className="card capability" delay={i * 90}>
            <span className="capability__num">{item.num}</span>
            <h3 className="capability__title">{item.title}</h3>
            <p className="capability__body">{item.body}</p>
          </Reveal>
        ))}
      </section>

      {/* Stack --------------------------------------------------------- */}
      <section className="section">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Stack</span>
            <h2 className="section__title">Tools I actually ship with</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <StackGrid />
        </Reveal>
      </section>

      {/* Selected work ------------------------------------------------- */}
      <section className="section">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section__title">Things I built and still run</h2>
          </div>
          <Link className="arrow-link" to="/projects">
            All projects<span>→</span>
          </Link>
        </Reveal>

        <div className="work">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <WorkRow
                num={String(i + 1).padStart(2, "0")}
                name={project.name}
                tech={project.tech}
                lead={project.lead}
                detail={project.detail}
                site={project.site}
                repo={project.repo}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Beyond the code ----------------------------------------------- */}
      <section className="section">
        <Reveal>
          <span className="eyebrow">Beyond the code</span>
          <h2 className="section__title beyond__title">
            Good software is more than good syntax
          </h2>
        </Reveal>
        <Reveal className="beyond__lead" delay={80}>
          <p>
            Working inside a regulated financial institution means the code is
            the easy part. These are the skills that get a project approved,
            adopted and kept alive.
          </p>
        </Reveal>
        <Reveal className="beyond__pills" delay={160}>
          {BEYOND_CODE.map((skill) => (
            <span key={skill} className="chip chip--pill">
              {skill}
            </span>
          ))}
        </Reveal>
      </section>

      {/* Contact ------------------------------------------------------- */}
      <section className="section">
        <Reveal className="contact">
          <div className="glow contact__glow" />
          <div className="contact__copy">
            <h2 className="contact__title">
              Hiring, or just want to build something?
            </h2>
            <p className="contact__body">
              Tell me what you are working on and I will tell you honestly
              whether I am the right person for it.
            </p>
          </div>
          <div className="contact__action">
            <a className="btn btn--primary" href={EMAIL}>
              Email me
            </a>
            <span className="contact__sign">Cade Gray</span>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
