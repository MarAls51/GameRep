import React from "react";
import Navbar from "../Navbar/Navbar.js";
import DiscussionPost from "./DiscussionPost.js";
import Comments from "./Comment.js";
import "./Post.css";

const Post = () => {
  return (
    <div className="background-post1">
      <Navbar />
      <div className="discussion-post3">
        <div className="Discussion-Post">
        <DiscussionPost/>
        </div>
        <div className="Discussion-Comment">
        <div className="Discussion-Comment-Options"></div>
        <div className="Discussion-Comment-Comments">
            <Comments/>
            <Comments/>
            <Comments/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
