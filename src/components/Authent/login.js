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
            <div className = "loginheaderbox">
            <h2 className = "loginheader">GameRep</h2>
            <input className="loginusername" type = "text" onChange = {(e) => setUsername(e.target.username)}placeholder="Email/Username"/>
            <input className="loginpassword" type="password" onChange = {(e) => setPassword(e.target.password)} placeholder="Password"/>
            <button className = "loginforgotpassword"><h2>Forgot Password</h2></button>
            <h3 className="loginstatus">{loginMessage ? loginMessage : ""}</h3>
            <button className ="loginbutton"><h2 className="loginbuttonlogin" onClick = {() => signin()}>Login</h2></button>
            <hr className="loginhr"></hr>
            <button className ="loginbutton"><h2 className="loginbuttonlogin">Register</h2></button>
            </div>
        </div>
    )
}
export default Login