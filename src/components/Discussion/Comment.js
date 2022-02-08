import React, {useState}from 'react';
import "./Comment.css"
import "./DiscussionPost.css"

const Comment = () =>{
const [good, setgood] = useState(false)
const [bad, setbad] = useState(false)

const select1 = () =>{
    if (good === true)
    {
        setgood(false)
        setbad(false)
    }
    else
    {
        setgood(true)
        setbad(false)
    }
}

const select2 = () =>{
    if (bad === true)
    {
        setbad(false)
        setgood(false)
    }
    else
    {
        setbad(true)
        setgood(false)
    }
}

    return(
    <div className="discussion-post-div2">
    <div className="discussion-post1">
        <div className="discussion-image-name">
            <div className="discussionimagenamerow">
                <img className ="discussionpicture"style={{height:40, width:40}} src="/assets/master.jpg" alt=""></img>
                <div className="namedate"> 
                    <h4 className="thedate">12/26/2022</h4>
                    <h4 className="thepersonname">person</h4>
                </div>
            </div>
            <div className="rateposts">
                    <button onClick={() => select1()} className={good ? "thumbsup active" : "thumbsup"}> 
                    <i className="fas fa-thumbs-up"></i>
                    </button>
                    <button onClick={() => select2()} className={bad ? "thumbsdown active": "thumbsdown"}> 
                    <i className="fas fa-thumbs-down"></i> 
                    </button>
            </div>
        </div>
        <div className = "fillerpost2">
            <h4>filler chat  filler chat filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler filler chat filler chat filler chat filler chat filler chat filler filler chat filler chat filler chat filler chat filler chat filler</h4>
        </div>
    </div>
</div>
    )
}

export default Comment;