import React from "react";
import "./NavButton.css";
import { Link } from "react-router-dom";
export default function NavButton(props) {
  if (!props.ext) {
    return (
      <div className="navButton">
        <Link to={props.link}>
          <span className="linkText">{props.label}</span>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="navButton">
        <a href={props.link}>
          <span className="linkText">{props.label}</span>
        </a>
      </div>
    );
  }
}
