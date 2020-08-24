import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
const navigation = () => {
    return(
        <div className = 'header'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 className="header-text">Cade Gray</h1>
            </Link>
        </div>
    )
}
export default navigation;