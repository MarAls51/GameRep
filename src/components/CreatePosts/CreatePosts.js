import React from "react";
import Navbar from "../Navbar/Navbar";
import "./CreatePosts.css";

const CreatePosts = () => {
  return (
    <div>
      <Navbar />
      <div className="create-posts-main">
        <div className="create-posts-div">
            <div className="create-posts-div-title"></div>
          <input
            type="text"
            className="create-posts-title"
            placeholder="Title"
          />
          <div className="create-posts-options"></div>
          <input type="text" className="create-posts-body" />
        </div>
        {/* <input type="text" className="create-posts-title" />
            <input type="text" className="create-posts-body" /> 
          <input type="submit" value="Submit" />*/}
      </div>
    </div>
  );
};

export default CreatePosts;
