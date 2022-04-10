import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./CreatePosts.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const CreatePosts = () => {
  return (
    <div>
      <Navbar />
      <div className="create-posts-main">
        <div className="create-posts-div">
          <div className="create-posts-div-title">
            <h1>Question For Developers</h1>
          </div>
          <input
            type="text"
            className="create-posts-title"
            placeholder="Title"
          />
            <button className="create-posts-options">
              <h1>Submit</h1>
            </button>
          <div className="create-posts-body">
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePosts;
