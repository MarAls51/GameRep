import React, { useState, useEffect } from "react";
import Row from "../Row/RecGames.js";
import "./CommunityPage.css";
const Forum = ({ community }) => {
  const [recGames, setRecGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/topgames")
      .then((res) => res.json())
      .then((res) => setRecGames(res));
  }, []);
  if (community === "") {
    return null;
  }
  return (
    <div className="forum-box">
      <div className="div-forum-menu">
          <div className="forum-image-logo-container">
            <img className="forum-logo" src={community.url} alt=""></img>
            <div className="community-rep">
              <h3>Community GameRep:</h3>
              <h3 className="rep-size">{community.rep}</h3>
            </div>
          </div>
          <hr className="forum-line"></hr>
          <div className="forum-ex">
            <div className="forum-item-row1">
              <h3 color="black">Bugs</h3>
              <i class="fas fa-bug"></i>
            </div>
            <h4 className="forum-description">Report bugs to the developer</h4>
          </div>
          <hr className="forum-line"></hr>
          <div className="forum-ex">
            <div className="forum-item-row2">
              <h3>Discussion</h3>
              <i class="fas fa-comments"></i>
            </div>
            <h4 className="forumdescription">Community Discussion</h4>
          </div>
          <hr className="forum-line"></hr>
          <div className="forum-ex">
            <div className="forum-item-row3">
              <h3>Questions For Developers</h3>
              <i class="fas fa-question"></i>
            </div>
            <h4 className="forumdescription">
              Questions and answers for the developers
            </h4>
          </div>
          <hr className="forum-line"></hr>
          <div className="forum-ex">
            <div className="forum-item-row4">
              <h2>Announcements</h2>
              <i class="fas fa-bullhorn"></i>
            </div>
            <h4 className="forum-description">Community Announcements </h4>
          </div>
          <hr className="forum-line"></hr>
          <div className="forum-ex">
            <div className="forum-item-row5">
              <h2>Memes</h2>
              <i class="fas fa-laugh-squint"></i>
            </div>
            <h4 className="forum-description"> Sigma males only</h4>
          </div>
          <hr className="forum-line"></hr>
          <div className="forum-ex">
            <div className="forum-item-row6">
              <h2>Ratings</h2>
              <i class="fas fa-star"></i>
            </div>
            <h4 className="forum-description">
              Help the community manager and developers know how to improve
            </h4>
          </div>
          <hr className="forum-line"></hr>
          <Row title="Similar Games" input={recGames}></Row>
        </div>
      </div>
  );
};
export default Forum;
