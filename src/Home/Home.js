import React from "react";
import "./Home.css";
import SocialCard from "../SocialCard/SocialCard";
import BioCard from "../BioCard/BioCard";
import NavButton from "../NavButton/NavButton";
const home = () => {
  return (
    <div className="container">
      <h1 className="about-me-text">Developer and Systems Analyst</h1>
      <BioCard />
      <NavButton label="Projects" link="/projects" />
      <SocialCard />
    </div>
  );
};
export default home;
