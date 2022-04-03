import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "./StudioUpdate.css";

const StudioPost = ({ title, input }) => {
  return (
    <div className="upcomming-container">
      <div className="row-posters">
        {input.map((item) => (
          <button className="game-button-1">
            <HoverVideoPlayer
              className="row-poster"
              videoSrc={item.mp4}
              muted={false}
              style={{
                width: "100%",
                height: 250,
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
                    width: 230,
                    height: 230,
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

export default StudioPost;
