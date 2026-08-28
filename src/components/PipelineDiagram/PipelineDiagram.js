import React from "react";
import "./PipelineDiagram.css";

/*
 * Stands in for a screenshot on the API template, which has no site to show.
 * Built from elements rather than one fixed-size SVG so it reflows to a column
 * on narrow screens instead of shrinking its labels into illegibility.
 */
const STAGES = [
  {
    label: "Push to main",
    note: "git push",
    icon: (
      <>
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </>
    ),
  },
  {
    label: "GitHub Actions",
    note: "build & tag",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </>
    ),
  },
  {
    label: "ghcr.io",
    note: "image pushed",
    icon: (
      <>
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 12l9 5 9-5" />
        <path d="M3 16l9 5 9-5" />
      </>
    ),
  },
  {
    label: "VPS",
    note: "compose up",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <line x1="7" y1="7.5" x2="7.01" y2="7.5" />
        <line x1="7" y1="16.5" x2="7.01" y2="16.5" />
      </>
    ),
  },
];

const Arrow = () => (
  <svg className="pipeline__arrow" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="3" y1="12" x2="19" y2="12" />
    <polyline points="14,7 19,12 14,17" />
  </svg>
);

export default function PipelineDiagram() {
  return (
    <figure className="pipeline">
      <div className="pipeline__track">
        {STAGES.map((stage, i) => (
          <React.Fragment key={stage.label}>
            {i > 0 && <Arrow />}
            <div className="pipeline__stage">
              <svg className="pipeline__icon" viewBox="0 0 24 24" aria-hidden="true">
                {stage.icon}
              </svg>
              <span className="pipeline__label">{stage.label}</span>
              <span className="pipeline__note">{stage.note}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <figcaption className="pipeline__caption">
        One push, no manual steps.
      </figcaption>
    </figure>
  );
}
