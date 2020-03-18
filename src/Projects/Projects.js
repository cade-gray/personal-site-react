import React from 'react';
import './Projects.css';
import vaultairePic from '../images/vaultaire.jpg';
import MHHPic from '../images/titleScreen.png';
import itecMajorPic from '../images/itecMajorViewer.png'
import Project from './Project'


const projects = () => {
    return(
        <div className = 'projects-container'>
            <div className='project-list-container'>
                <Project imgURL={itecMajorPic} projName="Radford University ITEC Major Viewer"
                projDesc="For my Advanced Web Development class, we were required to construct a javascript application that showcased Radford University's Information Technology Majors and their corresponding concentrations.  The user could then view 3 classes that are specific to the selected concentraton. This application implemented HTML, CSS, JavaScript, and jQuery."
                />
                <Project className='project-comp' imgURL={vaultairePic} projName="The Vault" 
                projDesc="In my Web Development II class, I was assigned to a group to create a website that implemented the LAMP stack as well as form validation and sanitization. The website would have a user create an account and they could then upload files to be shared with other users by creating groups and adding them to the groups. I worked with the front end using HTML, CSS, JavaScript, and Bootstrap CSS. I also worked some with the back end using PHP and SQL."
                />
                <Project imgURL={MHHPic} projName="Muse Hall Hop"
                projDesc="For my Computer Science II class, I was assigned to create a game using a library of my choice. I chose to use JavaFX and created a game that used the same mechanics as the mobile game flappy bird but gave it a theme that referred to my school's dorm, Muse Hall."
                />
            </div>
        </div>
    )
}
export default projects;