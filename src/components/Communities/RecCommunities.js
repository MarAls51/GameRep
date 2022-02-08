import React , {useState, useEffect} from "react";
import Row from "../Row/RecGames.js"

const RecCommunities = ({input}) => {
    const [games, setGames] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/topgames')
        .then(res => res.json())
        .then(res => setGames(res))
        }, [])
    if(input === true)
    {
        return null;
    }
    return (
    <div className="discover0games">
        <Row title = "Most Active Communities" input={games}></Row>
        <Row title = "Highest Rated Communities" input={games}></Row>
        <Row title = "Fastest Growing Communities" input={games}></Row>
    </div>
    )
}

export default RecCommunities; 