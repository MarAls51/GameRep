import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const [nav1, setnav] = useState([])
let navigate = useNavigate();
useEffect(() => {
  fetch ('http://localhost:3001/b')
  .then (res => res.json())
  .then (res => setnav(res))
}, [])

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
      if (clicked === true)
      {
        setClicked(false);
      }
    else{
        setClicked(true);
    }
  }
    return (
      <nav className="Navbar-Items">
        <h1 className="navbar-logo">GameRep</h1>
        <div className="menu-icon" onClick = {handleClick}>
          <i
            className={clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {nav1.map((item, index) => {
            return (
              <li key={index}>
                <button className={item.cName} onClick={() => navigate(item.url)}>
                  {item.titles}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
        }
    
        export default Navbar