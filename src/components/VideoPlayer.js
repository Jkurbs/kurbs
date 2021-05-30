import React from "react";
import ReactPlayer from "react-player";
import close from "../assets/close-100.png";
import "../styles/VideoPlayer.css";
import { useMediaQuery } from "react-responsive";

function VideoPlayer(props) {
  const isMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <div id="player-container">
      <a href="/">
        <img id={isMobile ? "close-mobile" : "close"} src={close} />
      </a>
      <ReactPlayer
        className={"player"}
        width={"80%"}
        height={"80%"}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </div>
  );
}

export default VideoPlayer;
