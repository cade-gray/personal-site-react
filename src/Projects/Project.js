import React, { Component } from "react";
import "./Project.css";
import { ReactComponent as GithubSVG } from "./github.svg";
class Project extends Component {
  render() {
    return (
      <div className="projContainer">
        <h2 className="projName">{this.props.projName}</h2>
        {this.props.imgURL.map((image) => {
          return <img className="projImg" src={image} alt=""></img>;
        })}
        <p className="desc">{this.props.projDesc}</p>
        {/* If there is a github link for the project, it will render out a link */}
        {this.props.githubLink && (
          <div className="githubLink">
            <a href={this.props.githubLink}>
              <GithubSVG className="githubSVG" />
            </a>
            <p className="githubText">View the code on GitHub</p>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
