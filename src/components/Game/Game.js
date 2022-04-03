import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Row from "../Row/UpCommingGames";
import "./Game.css";
import DiscussionPost from "../Discussion/DiscussionPost";
const TheGame = () => {
  const [jl, setJL] = useState(true);
  const joinLeave = () => {
    if (jl === true) {
      setJL(false);
    } else {
      setJL(true);
    }
  };
  const [games, setgames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/newgames")
      .then((res) => res.json())
      .then((res) => setgames(res));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="game-div">
        <div className="game-trailers">
          <Row input={games} />
        </div>
        <div className="game-reviews">
          <div className="game-review-board">
            <div className="inside-game-review-board">
            <div className="game-div-bar">
               <button
                className={jl ? "join-div-bar" : "join-div-bar2"}
                onClick={() => joinLeave()}
              >
                <h3>{jl ? "Join" : "Leave"} RedDead Community</h3>
              </button> 
              </div>
              <div className="game-div-bar-info">
                  <div className = "game-div-bar-info-community">
                   <h4>Community Manager:  John</h4> 
                   <h4>Number Of Members: 125</h4>
                   <h4>Active Members Last Month: 50</h4>
                   <h4>Community Management Rating: 50</h4>   
                  </div>
                  <div className = "game-div-bar-info-game">
                  <h4>Game Studio: EA</h4> 
                   <h4>Release Date: To Be Announced</h4>
                   <h4>GameRep Rating: 50</h4>   
                  </div>
              </div>
            </div>
          </div>
          <div className="game-reviews-posts">
            <DiscussionPost />
            <DiscussionPost />
            <DiscussionPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheGame;
