import React, { useState, useEffect } from "react";
import "./Discussion.css";
import Navbar from "../Navbar/Navbar.js";
import Row from "../Row/BestColumn";
import DiscussionPost from "./DiscussionPost.js";
import { useNavigate } from "react-router-dom";

const Memes = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/topgames")
      .then((res) => res.json())
      .then((res) => setGames(res));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="discussion">
        <div className="top-announcement">
          <div className="recent-announcement">
            <h2>Most Recent Announcement</h2>
            <DiscussionPost />
          </div>
        </div>
        <hr></hr>
        <div className="discussion-area">
          <div className="discussion-board">
            <div className="discussion-board-options"/>
            <div className="the-posts">
              <DiscussionPost />
              <DiscussionPost />
              <DiscussionPost />
              <DiscussionPost />
            </div>
          </div>
          <div className="the-Row1">
            <div className="discussion-title3">
              <h2 className="the-top-members">Top Members</h2>
            </div>
            <div className="the-best">
              <Row title="Top Members" input={games} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memes;
