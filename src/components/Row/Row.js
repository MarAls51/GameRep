import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "./Row.css";
import { rubberBand } from "react-animations";
import { flip } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Fireworks from "../confetti/Fireworks";
const Row = ({ title, input }) => {
  const [fireworks, setFireworks] = useState(false);
  const styles = {
    bounce: {
      animation: "x 2s",
      animationName: Radium.keyframes(rubberBand, "rubberBand"),
    },
    flip: {
      animation: "x 2s",
      animationName: Radium.keyframes(flip, "flip"),
    },
  };
  console.log(input[0]);
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <div className="row-posters">
        {input.map((item) => (
          <div>
            <button className="game-button">
              <HoverVideoPlayer
                className="row-poster"
                videoSrc={item.video}
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
            <div
              className="react-stars"
              onMouseEnter={() => setFireworks(true)}
            >
              <Fireworks tf={fireworks} />
              <h2 className="rep">
                GameRep:
                <span style={{ color: "gold" }}>
                  <StyleRoot style={styles.bounce}>{item.rating}</StyleRoot>
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
