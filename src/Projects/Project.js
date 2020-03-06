import React, { Component } from 'react';
import './Project.css';
class Project extends Component {
    render() {
        return (
            <div className="projContainer">
                <img className='projImg' src={this.props.imgURL} alt=""></img>
                <h2>{this.props.projName}</h2>
                <p className='desc'>{this.props.projDesc}</p>
            </div>
        );
    }
}

export default Project;