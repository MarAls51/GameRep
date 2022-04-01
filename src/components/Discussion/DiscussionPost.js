import React,{useState} from 'react';
import "./DiscussionPost.css"

const DiscussionPost = () =>
{
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

<div className="discussion-post-div">
    <div className="discussion-post1">
        <div className="discussion-image-name">
            <div className="discussion-image-name-row">
                <img className ="discussion-picture" style={{height:40, width:40}} src="/assets/master.jpg" alt=""></img>
                <div className="name-date">
                    <h4 className="the-date">12/26/2022</h4>
                    <h4 className="the-person-name">person</h4>
                </div>
                    <button className="button-discussion">
                    <h3 className="button-reply">Reply</h3>
                    </button>
            </div>
            <div className="rate-posts">
                    <button onClick={() => select1()} className={good ? "thumbs-up active" : "thumbs-up"}> 
                    <i className="fas fa-thumbs-up"></i>
                    </button>
                    <button onClick={() => select2()} className={bad ? "thumbs-down active": "thumbs-down"}> 
                    <i className="fas fa-thumbs-down"></i> 
                    </button>
            </div>
        </div>
        <div className = "filler-post">
            <h1>Title</h1>
            <h4>filler chat  filler chat filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler  filler chat filler chat filler chat filler chat filler chat filler</h4>
        </div>
    </div>
</div>

    )
}

export default DiscussionPost;