import React from "react";
import "./SocialLinks.css";
import { ReactComponent as TwitterSVG } from "./assets/twitter.svg";
import { ReactComponent as GithubSVG } from "./assets/github.svg";
import { ReactComponent as YoutubeSVG } from "./assets/youtube.svg";
import { ReactComponent as LinkedinSVG } from "./assets/linkedin.svg";

const LINKS = [
  { label: "GitHub", href: "https://github.com/cade-gray", Icon: GithubSVG },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cade-gray-78435312a/",
    Icon: LinkedinSVG,
  },
  { label: "Twitter", href: "https://twitter.com/cadegraydev", Icon: TwitterSVG },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCMRm15GqwPX41UTwDXddyyg",
    Icon: YoutubeSVG,
  },
];

export default function SocialLinks() {
  return (
    <div className="socials">
      {LINKS.map(({ label, href, Icon }) => (
        <a key={label} className="socials__item" href={href} aria-label={label}>
          <Icon className="socials__svg" />
        </a>
      ))}
    </div>
  );
}
