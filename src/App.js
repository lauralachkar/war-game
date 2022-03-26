import './components/Login.css';
import React from "react";
import Login from "./components/Login";
import Game from "./components/Game";

function App() {

    let username;

    function hideLoginComponent() {

    }

    function showGameComponent() {

    }

    function loginWithUsername(name) {
        username = name;
        alert(name);
        hideLoginComponent();
        showGameComponent();
    }

    return (
        <div>
            {/*<Login loginWithUsername={loginWithUsername}/>*/}
            <Game username={username}/>
        </div>
    );
}

export default App;
