import './Login.css';
import React, {useState} from "react";

function Login(props) {

    const [username, setUsername] = useState("");

    function checkUsername() {
        if (username.length > 0) {
            props.loginWithUsername(username);
        } else {
            alert("Empty username!!!!!!!!!");
        }
    }

    return (
        <div className="Login">
            <br/>
            <div className="title">Ready for WAR</div>
            <br/>
            <br/>
            <input onChange={(element) => {
                setUsername(element.target.value)
            }} className="inputField" placeholder="Enter your name"/>
            <br/>
            <br/>
            <br/>
            <button onClick={checkUsername} className="startButton"> Start</button>
            <br/>
            <br/>
            <br/>
            <button className="scoreButton">Score Table</button>
        </div>
    );
}

export default Login;
