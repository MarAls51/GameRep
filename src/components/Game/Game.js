import React,{useState} from 'react'
import './Game.css'


const TheGame = () =>
{
    const [info, setInfo] = useState([])
    const sentGame = () =>{
        fetch('http://localhost:3001/backend')
        .then(res => res.json())
        .then(res => setInfo(res))
    }
    return(
    <div>
        <div className="game-div">
            <div className="game-info">
            </div>
            <div className="div-reviews">
                <button onClick = {() => sentGame()}><h2>text</h2></button>
                <h2>{info[0]?.countryname || ""}</h2>
            </div>
        </div>
    </div>
    )
}

export default TheGame