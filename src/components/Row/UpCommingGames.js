import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "./Row.css";

const Row = ({ title, input }) => {
  return (
    <div className="upcomming-container">
      <h2 className="title">{title}</h2>
      <div className="row-posters">
        {input.map((item) => (
          <button className="game-button">
            <HoverVideoPlayer
              className="row-poster"
              videoSrc={item.mp4}
              muted={false}
              style={{
                width: "100%",
                height: 295,
                top: 5,
                objectFit: "cover",
              }}
              sizingMode="overlay"
              pausedOverlay={
                <img
                  src={item.url}
                  alt={item.name}
                  className="overlay"
                  style={{
                    width: 300,
                    height: 300,
                  }}
                />
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Row;
