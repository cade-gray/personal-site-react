import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutContainer">
      <h2>About Me</h2>
      <h3>What do I do for work?</h3>
      <p>
        I work full time as a Systems Analyst for Tennesse's top Credit Union. I
        also work on the side as a web developer, creating websites or software
        solutions for businesses, especially smaller ones in my area of
        Northeast Tennessee.
      </p>
      <h3>What languages/frameworks have I developed with?</h3>
      <ul>
        <li>Javascript / TypeScript / Node</li>
        <ul>
          <li>React</li>
          <li>Svelte / SvelteKit</li>
          <li>Express for API Development</li>
          <li>SailsJS</li>
        </ul>
        <li>Go</li>
        <li>Java</li>
      </ul>
    </div>
  );
};
export default About;
