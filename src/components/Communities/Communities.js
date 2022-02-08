import React, {useState, useEffect} from 'react'
import Footer from "../Footer/Footer.js"
import Navbar from "../Navbar/Navbar.js"
import './Communities.css'
import { motion } from "framer-motion";
import { useTransition } from 'react-spring';
import { animated, useSpring } from "react-spring";
import Forum from './CommunityPage';
import RecCommunities from './RecCommunities';

const Communities = () => {
    const [menu, setmenu] = useState(true)
    const [list, setList] = useState([])
    const [buttonc,setbuttonc] = useState("black")
    const [item,setitem]=useState("")
    useEffect(() => {
        fetch('http://localhost:3001/communities')
        .then(res => res.json())
        .then(res => setList(res))
        }, [])
    
const props = useSpring({
    from: {opacity:0, marginLeft: -500},
    to: {opacity:1,marginLeft: 0},
    config: {duration: 400},
  });

const props2 = useSpring({
    from: {opacity:0,marginLeft: 0},
    to: {opacity:1, marginLeft: -600},
    config: {duration: 500},
    reset: true,
  });

  const props3 = useSpring({
    from: {opacity:0},
    to: {opacity:1},
    config: {duration: 400},
    reset: true
  });

  return(
<div className="front">
    <Navbar/>
    <div className= "forum-menu-icon" onClick={() => setmenu(!menu)}>
        <i className={ menu ? "fas fa-chevron-circle-left" : "fas fa-chevron-circle-right"}></i>
    </div> 
    <div className="main-div-game">
        <div className="game-search">
            <div className="community-search"><i class="fas fa-search"></i></div>
            <input className="searchcommunity" onClick = {() => setmenu(false)} placeholder="Find Communities"/>
        </div>
    </div>
    <RecCommunities input={menu} />
    <hr size="2" color="black" className="communityline"></hr>
    <animated.div style={menu ? props : props2}>
        <div className={"community-menu active"}>
        <div className="forum-div">
            <h2 className="community-f">
            <i className="far fa-comment-dots"></i>         Forums
            </h2>   
        </div>
        <h1 className="inlinegroup"> Communities </h1>
        <hr style = {{width: "100%",color: "lightgrey"}}></hr>
        <ul style={{listStyle:"none"}}>
            { list.map((item) => (
        <li key = {item.id} >
        <button className="community-list" onClick={() => setitem(item)}>
            <div className="fleximages"> 
                <img className="imagesrc" alt="" src={item.url}></img> 
                <h2 className="theitems">{item.communityName}</h2>
            </div>
        </button> 
        </li>       
        ))
            }
        </ul>
        </div> 
    </animated.div>
       {menu ?  
       <animated.div style={props3}><Forum community={item}/></animated.div>
       :
       null
       }
</div>
    );
}


export default Communities