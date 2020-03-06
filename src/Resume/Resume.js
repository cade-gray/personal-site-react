import React from 'react';
import MyResumeImg from '../images/myresume.jpeg';
import MyResumePDF from './myresume.pdf'
import './Resume.css';



const resume = () => {
    return(
        <div className = 'resume-container'>
            <div>
                <img src={MyResumeImg} className='resume-img' alt='My resume' />
                <h4><a href={MyResumePDF} download>Download </a></h4>
           </div>
        </div>
    )
}
export default resume;