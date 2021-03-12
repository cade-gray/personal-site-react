import React from 'react'
import './NavButton.css'
import { Link } from 'react-router-dom';
export default function NavButton(props) {
    return (
        <div className="navButton">
            <Link to={props.link}>
                <span className="linkText">{props.label}</span>
            </Link>
        </div>
    )
}
