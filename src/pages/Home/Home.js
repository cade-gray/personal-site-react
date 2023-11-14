import React from "react";
import "./Home.css";
import SocialCard from "../../components/SocialCard/SocialCard";
import BioCard from "../../components/BioCard/BioCard";
import NavButton from "../../components/NavButton/NavButton";
const home = () => {
  return (
    <div className="container">
      <h1 className="about-me-text">Developer and Systems Analyst</h1>
      <BioCard />
      <NavButton label="About Me" link="/about" />
      <NavButton label="Projects" link="/projects" />
      <NavButton label="Blog" link="https://blog.cadegray.dev" ext="true" />
      <SocialCard />
    </div>
  );
};
export default home;
