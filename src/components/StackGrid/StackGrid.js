import React, { useState } from "react";
import { STACK, STACK_FILTERS } from "../../data/stack";
import "./StackGrid.css";

export default function StackGrid() {
  const [filter, setFilter] = useState("all");
  const visible =
    filter === "all" ? STACK : STACK.filter((item) => item.group === filter);

  return (
    <>
      <div className="stack__tabs" role="tablist" aria-label="Filter stack">
        {STACK_FILTERS.map((tab) => {
          const active = tab.id === filter;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={"stack__tab" + (active ? " is-active" : "")}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="stack__chips">
        {visible.map((item) => (
          <span key={item.name} className="chip">
            {item.name}
          </span>
        ))}
      </div>
    </>
  );
}
