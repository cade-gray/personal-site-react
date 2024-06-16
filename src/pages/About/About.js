import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutContainer">
      <h2>About Me</h2>
      <h3>What do I do for a living?</h3>
      <p>
        I work full time as a Systems Analyst for one of the United State's top
        Credit Unions, supporting critical finanical applications and creating
        software solutions to grow the business, improve staff workflows, and
        empower them to make data driven decisions.
      </p>
      <p>
        I also work on the side, more as a hobby curently, as a software
        developer. I focus mostly in the web realm, creating web apps, web
        services, and software solutions for myself and others.
      </p>
      <h3>What languages/frameworks/tools have I developed with?</h3>
      <ul>
        <li>Javascript / TypeScript / Node</li>
        <ul>
          <li>React</li>
          <li>Svelte / SvelteKit</li>
          <li>Express for API Development</li>
          <li>Building RESTful API's</li>
          <li>PM2</li>
          <li>
            Deployment of these technologies in Linux and Windows environments.
          </li>
        </ul>
        <li>SQL</li>
        <ul>
          <li>Oracle</li>
          <ul>
            <li>ODBC Connectivity</li>
          </ul>
          <li>SQL Server</li>
          <ul>
            <li>SQL Server Integration Services (SSIS)</li>
          </ul>
          <li>MySQL</li>
        </ul>
        <li>Go</li>
        <ul>
          <li>Building services that intereact with API's</li>
        </ul>
        <li>PowerShell</li>
        <li>Bash Scripting</li>
        <li>Java</li>
        <li>Docker</li>
      </ul>
      <h3>What other skills have I picked up from my career?</h3>
      <ul>
        <li>Applying technology in a finanical context</li>
        <li>
          Financial Software knowledge (Fiserv, MeridianLink, Jack Henry, etc..)
        </li>
        <li>Project Management</li>
        <li>Business Analysis</li>
        <li>Process Improvement</li>
        <li>Training</li>
        <li>Public Speaking</li>
        <li>Team Leadership</li>
        <li>Customer Service</li>
      </ul>
    </div>
  );
};
export default About;
