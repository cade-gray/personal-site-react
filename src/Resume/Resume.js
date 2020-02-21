import React from 'react';
import MyResumeImg from '../images/myresume.jpeg';
import MyResumePDF from './myresume.pdf'
import './Resume.css';



const resume = () => {
    return(
        <div className = 'resume-container'>
            <div>
            <h2><a href={MyResumePDF} download>Download this resume for a better viewing experience!</a></h2>
                <img src={MyResumeImg} className='resume-img' alt='My resume' />
                <br />
           </div>
        </div>
    )
}
export default resume;