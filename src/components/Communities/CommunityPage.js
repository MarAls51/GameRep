import React, { useState, useEffect } from "react";
import Row from "../Row/RecGames.js";
import "./CommunityPage.css";
import { useNavigate } from "react-router-dom";

const Forum = ({ community }) => {
  const [recGames, setRecGames] = useState([]);
  let navigate = useNavigate();
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
            <button className="button-item-row1" onClick={() => navigate("/bugs")}>
              <h3 color="black">Bugs</h3>
              <i class="fas fa-bug"></i>
            </button>
          </div>
          <h4 className="forum-description">Report bugs to the developer</h4>
        </div>
        <hr className="forum-line"></hr>
        <div className="forum-ex">
          <div className="forum-item-row2">
            <button className="button-item-row2" onClick={() => navigate("/discussion")}>
              <h3>Discussion</h3>
              <i class="fas fa-comments"></i>
            </button>
          </div>
          <h4 className="forumdescription">Community Discussion</h4>
        </div>
        <hr className="forum-line"></hr>
        <div className="forum-ex">
          <div className="forum-item-row3">
          <button className="button-item-row3" onClick={() => navigate("/questions")}>
            <h3>Questions For Developers</h3>
            <i class="fas fa-question"></i>
            </button>
          </div>
          <h4 className="forumdescription">
            Questions and answers for the developers
          </h4>
        </div>
        <hr className="forum-line"></hr>
        <div className="forum-ex">
          <div className="forum-item-row4">
          <button className="button-item-row4" onClick={() => navigate("/announcements")}>
            <h2>Announcements</h2>
            <i class="fas fa-bullhorn"></i>
            </button>
          </div>
          <h4 className="forum-description">Community Announcements </h4>
        </div>
        <hr className="forum-line"></hr>
        <div className="forum-ex">
          <div className="forum-item-row5">
          <button className="button-item-row5" onClick={() => navigate("/memes")}>
            <h2>Memes</h2>
            <i class="fas fa-laugh-squint"></i>
            </button>
          </div>
          <h4 className="forum-description"> Sigma males only</h4>
        </div>
        <hr className="forum-line"></hr>
        <div className="forum-ex">
          <div className="forum-item-row6">
          <button className="button-item-row6" onClick={() => navigate("/ratings")}>
            <h2>Ratings</h2>
            <i class="fas fa-star"></i>
            </button>
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
