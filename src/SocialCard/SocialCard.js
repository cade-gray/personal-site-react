import React from "react";
import "./SocialCard.css";
import { ReactComponent as TwitterSVG } from "./Assets/twitter.svg";
import { ReactComponent as InstagramSVG } from "./Assets/instagram.svg";
import { ReactComponent as GithubSVG } from "./Assets/github.svg";
import { ReactComponent as CodepenSVG } from "./Assets/codepen.svg";
import { ReactComponent as YoutubeSVG } from "./Assets/youtube.svg";
import { ReactComponent as LinkedinSVG } from "./Assets/linkedin.svg";

export default function SocialCard() {
  return (
    <div className="socialCard">
      <div className="socialItem" id="twitter">
        <a href={"https://twitter.com/Cade_Grey"} className="socialLink">
          <TwitterSVG className="socialSVG" />
        </a>
      </div>
      <div className="socialItem" id="instagram">
        <a href={"https://www.instagram.com/cade_grey/"} className="socialLink">
          <InstagramSVG className="socialSVG" />
        </a>
      </div>
      <div className="socialItem" id="github">
        <a href={"https://github.com/cade-gray"} className="socialLink">
          <GithubSVG className="socialSVG" />
        </a>
      </div>
      <div className="socialItem" id="codepen">
        <a href={"https://codepen.io/IOUTreeFiddy"} className="socialLink">
          <CodepenSVG className="socialSVG" />
        </a>
      </div>
      <div className="socialItem" id="youtube">
        <a
          href={"https://www.youtube.com/channel/UCMRm15GqwPX41UTwDXddyyg"}
          className="socialLink"
        >
          <YoutubeSVG className="socialSVG" />
        </a>
      </div>
      <div className="socialItem" id="linkedin">
        <a
          href={"https://www.linkedin.com/in/cade-gray-78435312a/"}
          className="socialLink"
        >
          <LinkedinSVG className="socialSVG" />
        </a>
      </div>
    </div>
  );
}
