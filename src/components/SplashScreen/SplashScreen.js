import Navbar from '../Navbar/Navbar';
import React,{ useState, useEffect} from 'react'
import Row from '../Row/Row';
import Footer from '../Footer/Footer';
import "./SplashScreen.css";
import UpcommingGames from '../Row/UpCommingGames';
function SplashScreen() {
const [games, setgames] = useState([])
 const [studios, setstudios] = useState([])
 const [newGames, setnewGames] = useState([])
useEffect(() => {
fetch('http://localhost:3001/topgames')
.then(res => res.json())
.then(res => setgames(res))

 fetch('http://localhost:3001/topstudios')
 .then(res => res.json())
 .then(res => setstudios(res))

 fetch('http://localhost:3001/newgames')
 .then(res => res.json())
 .then(res => setnewGames(res))
}, [])
  return (
    <div className="App">
      <Navbar/>
      <Row title="Top Community Rated Games Of The Month" input={games} />
       <Row title="Top Community Rated Studios Of The Month" input={studios} />
        <UpcommingGames title="Upcomming Games" input={newGames} /> 
      <Footer/>
    </div>
  );
}

export default SplashScreen;