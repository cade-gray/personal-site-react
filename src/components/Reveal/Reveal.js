import React, { useEffect, useRef, useState } from "react";
import "./Reveal.css";

/*
 * Fade-and-rise on scroll. The design canvas staggers these on load because an
 * artboard renders all at once; on the real page they trigger on entry.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={"reveal" + (shown ? " is-visible" : "") + (className ? " " + className : "")}
      style={delay ? { transitionDelay: delay + "ms" } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
