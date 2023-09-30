import React from "react";
import "./Projects.css";
import vaultairePic from "../images/vaultaire.jpg";
import itecMajorPic from "../images/itecMajorViewer.png";
import colorPal1 from "../images/colorPalHome.png";
import colorPal2 from "../images/colorPalCreate.png";
import colorPal3 from "../images/colorPalProfile.png";
import weddingSiteHome from "../images/weddingSiteHome.png";
import Project from "./Project";

const projects = () => {
  return (
    <div className="projects-container">
      <div className="project-list-container">
        <Project
          imgURL={[weddingSiteHome]}
          projName="Wedding Site"
          githubLink="https://github.com/cade-gray/wedding-site"
          projDesc="This was created for my own wedding! We needed a place to share information regarding our wedding so I created this.  It is using Svelte and SvelteKit for the front end and I also built a REST API using NodeJS and the Express framework to handle recieving RSVP data and inserting into a MySQL database. I also created the background using SVGs created with Figma and a Wacom tablet, drawing is not a strength of mine."
        />
        <Project
          imgURL={[colorPal1, colorPal2, colorPal3]}
          projName="Color Pal-ette"
          githubLink="https://github.com/cade-gray/ColorPal"
          projDesc="For my final project in my Advanced Web development class, I was required to create a full stack web application.  I chose to create a platform where developers and designers can create color palettes and discover new ones.  I used React.js for the front end and used NodeJS and the Express frameork for the back end to handle sending and recieving data to MongoDB NoSQL database."
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
