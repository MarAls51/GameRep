import React from 'react';
import Navbar from "../Navbar/Navbar.js";
import './StudioPost';
import DiscussionPost from './DiscussionPost';

const StudioPost = () =>
{
    return (
    <div>
    <Navbar/>
        <div className="discussion-board2">
            <div className="the-posts2">
                <DiscussionPost/>
            </div>
        </div>
    </div>
    )
}

export default StudioPost;