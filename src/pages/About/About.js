import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutContainer">
      <h2>About Me</h2>
      <h3>What do I do for work?</h3>
      <p>
        I work full time as a Systems Analyst for Tennesse's top Credit Union,
        supporting critical finanical applications and creating software
        solutions to grow the business, improve staff workflow, and empower them
        to make data driven decisions.
      </p>
      <p>
        I also work on the side as a software developer, focusing mostly in the
        web realm, creating websites, web services, and software solutions for
        businesses and individuals.
      </p>
      <h3>What languages/frameworks/tools have I developed with?</h3>
      <ul>
        <li>Javascript / TypeScript / Node</li>
        <ul>
          <li>React</li>
          <li>Svelte / SvelteKit</li>
          <li>Express for API Development</li>
          <li>SailsJS</li>
        </ul>
        <li>SQL</li>
        <ul>
          <li>Oracle</li>
          <ul>
            <li>ODBC Connectivity</li>
          </ul>
          <li>SQL Server</li>
          <ul>
            <li>SQL Server Integration Services</li>
          </ul>
        </ul>
        <li>Go</li>
        <li>Java</li>
      </ul>
    </div>
  );
};
export default About;
