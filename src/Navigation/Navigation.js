import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
const navigation = () => {
    return(
        <div className = 'header'>
            <div className="left-col">
                <h1 className="header-text">Cade Gray</h1>
            </div>
            <div className="right-col">
                <nav className="navigation">
                <ul className="nav-ul">
                    <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link>
                    <Link to='/resume' style={{ textDecoration: 'none' }}><li>Resume</li></Link>
                    <Link to='/projects' style={{ textDecoration: 'none' }}><li>Projects</li></Link>
                </ul>
                </nav>
            </div>
        </div>
    )
}
export default navigation;