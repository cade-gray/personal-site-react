import React, { Component } from 'react';
import './Project.css';
class Project extends Component {
    render() {
        return (
            <div className="projContainer">
                <h2 className="projName">{this.props.projName}</h2>
                {this.props.imgURL.map(image => {
                    return <img className='projImg' src={image} alt=""></img>
                })}
                <p className='desc'>{this.props.projDesc}</p>
            </div>
        );
    }
}

export default Project;