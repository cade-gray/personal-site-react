import React from 'react';
import './Projects.css';
import vaultairePic from '../images/vaultaire.jpg';
import MHHPic from '../images/titleScreen.png';


const projects = () => {
    return(
        <div className = 'projects-container'>
            <div className='project-list-container'>
                <img src={vaultairePic} className='vaultaire-pic' alt='Vaultaire' />
                <h2>The Vault</h2>
                <p>In my Web Development II class, I was assigned to a group to create a website that implemented the LAMP stack as well as form validation and sanitization. The website would have a user create an account and they could then upload files to be shared with other users by creating groups and adding them to the groups. I worked with the front end using HTML, CSS, JavaScript, and Bootstrap CSS. I also worked some with the back end using PHP and SQL.</p>
                <img src={MHHPic} className='mhh-pic' alt='Muse Hall Hop' />
                <h2>Muse Hall Hop</h2>
                <p>For my Computer Science II class, I was assigned to create a game using a library of my choice. I chose to use JavaFX and created a game that used the same mechanics as the mobile game flappy bird but gave it a theme that referred to my school's dorm, Muse Hall.</p>
            </div>
        </div>
    )
}
export default projects;