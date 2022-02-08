import React,{useState} from 'react';
import "./DiscussionPost.css"

const Ratings = ({rating}) =>
{
return(
<div className="discussion-post-div">
    <div className="discussion-post1">
        <div className="discussion-image-name">
            <div className="discussion-image-name-row">
                <img className ="discussion-picture"style={{height:40, width:40}} src="/assets/master.jpg" alt=""></img>
                <div className="name-date"> 
                    <h4 className="the-date">12/26/2022</h4>
                    <h4 className="the-person-name">person</h4>
                </div>
                    <button className="button-discussion">
                    <h3 className="button-reply">Reply</h3>
                    </button>
            </div>
        </div>
        <div className = "filler-post">
            <i className={"thumbs-up"}></i>
            <h4>filler chat  filler chat filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler </h4>
        </div>
    </div>
</div>
    )
}

export default Ratings;