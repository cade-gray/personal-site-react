import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
export default props => {
    return (
      // Pass on our props
      <Menu {...props}>
            <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
            <Link to='/resume' style={{ textDecoration: 'none' }}>Resume</Link>
            <Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link>
      </Menu>
    );
  };