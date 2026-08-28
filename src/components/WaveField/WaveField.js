import React, { useEffect, useMemo, useState } from "react";
import "./WaveField.css";

/*
 * The site's wave background. One continuous SVG layer rather than a repeating
 * background-image: a tiled pattern rasterises each tile separately, so every
 * stroke crossing a tile edge gets antialiased twice and never quite meets.
 *
 * A single row path is defined once and repeated vertically with <use>. The
 * whole group drifts by exactly one PERIOD, so the loop point is invisible.
 */

const PERIOD = 220;
const AMPLITUDE = 12;
const ROW_GAP = 22;
const SEG = PERIOD / 4;
const K = (2 * Math.PI) / PERIOD;

const waveY = (x) => AMPLITUDE * Math.sin(K * x);
const slope = (x) => AMPLITUDE * K * Math.cos(K * x);
const r = (v) => Math.round(v * 100) / 100;

/*
 * Quarter-period cubics with tangent-derived control points: an exact sine to
 * within a rounding error. Every joint is C1-continuous, so `S` reproduces the
 * reflected control point for free and keeps the path short.
 */
function buildRow(from, to) {
  const steps = Math.ceil((to - from) / SEG);
  const first = from + SEG;
  const d = [
    "M" + r(from) + " " + r(waveY(from)) +
    "C" + r(from + SEG / 3) + " " + r(waveY(from) + (slope(from) * SEG) / 3) +
    " " + r(first - SEG / 3) + " " + r(waveY(first) - (slope(first) * SEG) / 3) +
    " " + r(first) + " " + r(waveY(first)),
  ];
  for (let i = 1; i < steps; i++) {
    const x = from + (i + 1) * SEG;
    d.push(
      "S" + r(x - SEG / 3) + " " + r(waveY(x) - (slope(x) * SEG) / 3) +
      " " + r(x) + " " + r(waveY(x))
    );
  }
  return d.join("");
}

export default function WaveField() {
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const measure = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

  // Two periods of overhang on each side so the drift can never run out.
  const d = useMemo(
    () => buildRow(-2 * PERIOD, size.w + 2 * PERIOD),
    [size.w]
  );

  const rows = useMemo(() => {
    const count = Math.ceil(size.h / ROW_GAP) + 2;
    const out = [];
    for (let i = 0; i < count; i++) out.push(-ROW_GAP + i * ROW_GAP);
    return out;
  }, [size.h]);

  if (!size.w) return null;

  return (
    <div className="wave-field" aria-hidden="true">
      <svg className="wave-field__svg">
        <defs>
          <path id="wave-row" d={d} />
        </defs>
        <g
          className="wave-field__drift"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeOpacity="0.1"
        >
          {rows.map((y) => (
            <use key={y} href="#wave-row" y={y} />
          ))}
        </g>
      </svg>
    </div>
  );
}
