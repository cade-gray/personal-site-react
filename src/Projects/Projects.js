import React from "react";
import "./Projects.css";
import vaultairePic from "../images/vaultaire.jpg";
import itecMajorPic from "../images/itecMajorViewer.png";
import colorPal1 from "../images/colorPalHome.png";
import colorPal2 from "../images/colorPalCreate.png";
import colorPal3 from "../images/colorPalProfile.png";
import Project from "./Project";

const projects = () => {
  return (
    <div className="projects-container">
      <div className="project-list-container">
        <Project
          imgURL={[colorPal1, colorPal2, colorPal3]}
          projName="Color Pal-ette"
          githubLink="https://github.com/cade-gray/ColorPalClient"
          projDesc="For my final project in my Advanced Web development class, I was required to create a full stack web application.  I chose to create a platform where developers and designers can create color palettes and discover new ones.  I used React.js for the front end and used Express.js and MongoDB for the back end."
        />
        <Project
          imgURL={[itecMajorPic]}
          projName="Radford University ITEC Major Viewer"
          githubLink="https://github.com/cade-gray/itec-majors-viewer"
          projDesc="For my Advanced Web Development class, we were required to construct a javascript application that showcased Radford University's Information Technology Majors and their corresponding concentrations.  The user could then view 3 classes that are specific to the selected concentraton. This application implemented HTML, CSS, JavaScript, and jQuery."
        />
        <Project
          imgURL={[vaultairePic]}
          projName="The Vault"
          githubLink={false}
          projDesc="In my Web Development II class, I was assigned to a group to create a website that implemented the LAMP stack as well as form validation and sanitization. The website would have a user create an account and they could then upload files to be shared with other users by creating groups and adding them to the groups. I worked with the front end using HTML, CSS, JavaScript, and Bootstrap CSS. I also worked some with the back end using PHP and SQL."
        />
      </div>
    </div>
  );
};
export default projects;
