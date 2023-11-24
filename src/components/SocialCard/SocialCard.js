import React from "react";
import "./SocialCard.css";
import { ReactComponent as TwitterSVG } from "./Assets/twitter.svg";
import { ReactComponent as GithubSVG } from "./Assets/github.svg";
import { ReactComponent as YoutubeSVG } from "./Assets/youtube.svg";
import { ReactComponent as LinkedinSVG } from "./Assets/linkedin.svg";

export default function SocialCard() {
  return (
    <div className="socialCard">
      <a
        href={"https://twitter.com/cadegraydev"}
        className="socialItem"
        id="twitter"
      >
        <TwitterSVG className="socialSVG" />
      </a>
      <a
        href={"https://github.com/cade-gray"}
        className="socialItem"
        id="github"
      >
        <GithubSVG className="socialSVG" />
      </a>
      <a
        href={"https://www.youtube.com/channel/UCMRm15GqwPX41UTwDXddyyg"}
        className="socialItem"
        id="youtube"
      >
        <YoutubeSVG className="socialSVG" />
      </a>
      <a
        href={"https://www.linkedin.com/in/cade-gray-78435312a/"}
        className="socialItem"
        id="linkedin"
      >
        <LinkedinSVG className="socialSVG" />
      </a>
    </div>
  );
}
