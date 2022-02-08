import React from 'react';
import Navbar from "../Navbar/Navbar.js";
import DiscussionPost from './DiscussionPost.js';
import Comemnts from "./Comment.js"
import "./Post.css";

const Post = () =>
{
    return(
        <div className="background-post1">
        <Navbar/>
        <div className="discussion-post3">
            <div className="discussion-post2">
            <DiscussionPost/>
            <Comemnts/>
            </div>
        </div>
        </div>
    )
}

export default Post;