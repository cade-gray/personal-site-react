import React, { Component } from 'react'
import './About.css'
import {ReactComponent as ResumeSVG} from './Assets/myResumeSvg.svg';
import {ReactComponent as TwitterSVG} from './Assets/twitter.svg';
import {ReactComponent as InstagramSVG} from './Assets/instagram.svg';
import {ReactComponent as GithubSVG} from './Assets/github.svg';
import {ReactComponent as CodepenSVG} from './Assets/codepen.svg';
import {ReactComponent as YoutubeSVG} from './Assets/youtube.svg';
import {ReactComponent as LinkedinSVG} from './Assets/linkedin.svg';
import ResumePDF from './Assets/myResume.pdf'
var bioText = require('./bioText')

export default class About extends Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="bioCard">
                    <p className="bioText">{bioText.bioText}</p>
                </div>
                <div className="bottomHalf">
                    <div className="resumeCard">
                        <h2>Resume</h2>
                        <div className="resumeContainer">
                            <ResumeSVG className="resumeSvg" />
                        </div>
                        <a href={ResumePDF} download className="resumeLink"><div className="downloadDiv">Download PDF</div></a>
                    </div>
                    <div className="socialCard">
                        <div className="socialItem" id="twitter">
                            <a href={"https://twitter.com/Cade_Grey"} className="socialLink" >
                                <TwitterSVG className="socialSVG"/>
                            </a>
                        </div>
                        <div className="socialItem" id="instagram">
                            <a href={"https://www.instagram.com/cade_grey/"} className="socialLink" >
                                <InstagramSVG className="socialSVG" />
                            </a>
                        </div>
                        <div className="socialItem" id="github">
                            <a href={"https://github.com/cade-gray"} className="socialLink" >
                                <GithubSVG className="socialSVG" />
                            </a>
                        </div>
                        <div className="socialItem" id="codepen">
                            <a href={"https://codepen.io/IOUTreeFiddy"} className="socialLink" >
                                <CodepenSVG className="socialSVG" />
                            </a>
                        </div>
                        <div className="socialItem" id="youtube">
                            <a href={"https://www.youtube.com/channel/UCMRm15GqwPX41UTwDXddyyg"} className="socialLink" >
                                <YoutubeSVG className="socialSVG" />
                            </a>
                        </div>
                        <div className="socialItem" id="linkedin">
                            <a href={"https://www.linkedin.com/in/cade-gray-78435312a/"} className="socialLink" >
                                <LinkedinSVG className="socialSVG" />
                            </a>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
