import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
export default function Logo() {
  return (
    <div>
      <h1>
        <Link to="/" className="logo">
          Cade Gray
        </Link>
      </h1>
    </div>
  );
}
