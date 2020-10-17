import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
const navigation = () => {
    return(
        <div className = 'navigation'>
            <div className="nav-item">
                <Link to="/" >
                    <h2 className="header-text">Home</h2>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/resume" >
                    <h2 className="header-text">Resume</h2>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/projects" >
                    <h2 className="header-text">Projects</h2>
                </Link>
            </div>
        </div>
    )
}
export default navigation;