import React, {useState} from 'react'
import Axios from 'axios'
import './login.css'

const Login = () =>{
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [loginMessage, setLoginMessage] = useState("")
const signin = () =>{
Axios.post("http://localhost:3001/loginuser", {
      username: username,
      password: password,
    }).then((response) => {
        if(response.data.message){
            console.log(response.data.message)
            setLoginMessage(response.data.message)
    } else {
        setLoginMessage(response.data[0].username)
    }
    });
}
    return(
        <div className = "login" >
            <div className = "login-header-box">
            <h2 className = "login-header">GameRep</h2>
            <input className="login-username" type = "text" onChange = {(e) => setUsername(e.target.username)}placeholder="Email/Username"/>
            <input className="login-password" type="password" onChange = {(e) => setPassword(e.target.password)} placeholder="Password"/>
            <button className = "login-forgot-password"><h2>Forgot Password</h2></button>
            <h3 className="login-status">{loginMessage ? loginMessage : ""}</h3>
            <button className ="login-button"><h2 className="login-button-login" onClick = {() => signin()}>Login</h2></button>
            <hr className="login-hr"></hr>
            <button className ="login-button"><h2 className="login-button-login">Register</h2></button>
            </div>
        </div>
    )
}
export default Login