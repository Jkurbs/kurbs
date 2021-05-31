import React from "react";
import "../styles/App.css";
import { useMediaQuery } from "react-responsive";

function VideoPlayer(props) {
  const isMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <div className="footer">
      <h2>Kurbs</h2>
      <a>
        The world’s most important <br /> knowledge, organized.
      </a>
      <div className="footer-navigation">
        <a href="/about">About</a>
        <a href="mailto:youremail@domain.tld">Contact Us</a>
        <a
          href={
            "https://www.notion.so/Terms-of-Service-7cc381ae6af14a129c0b7699cafcd157"
          }
        >
          Terms of use
        </a>
        <a
          href={
            "https://www.notion.so/Privacy-Policy-9829a3cea20945799e82becb39449bf2"
          }
        >
          Privacy Policy
        </a>
      </div>
      <span>© 2021 Kurbs</span>
    </div>
  );
}

export default VideoPlayer;
