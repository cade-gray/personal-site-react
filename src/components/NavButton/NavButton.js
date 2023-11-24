import React from "react";
import "./NavButton.css";
import { Link } from "react-router-dom";
export default function NavButton(props) {
  if (!props.ext) {
    return (
      <Link to={props.link} className="navButton">
        <div className="linkContainer">
          <span className="linkText">{props.label}</span>
        </div>
      </Link>
    );
  } else {
    return (
      <a href={props.link} className="navButton">
        <span className="linkText">{props.label}</span>
      </a>
    );
  }
}
