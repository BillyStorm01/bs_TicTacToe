import React from "react";
import '/src/styles/component-css/start-box.css'

const StartBox = ({startGame, setPlayer}) => {
      const playGame = (piece) => {
        startGame(true)
        setPlayer(piece)
      }
    return (
<div className="main-menu__startBox">
        <h4><strong>CHOOSE YOUR WEAPON</strong></h4>
        <div className="inputs">
        <input placeholder="Player 1 username"></input>
        <input placeholder="Player 2 username"></input>
        </div>
    <div>
        <button className="xBox" type="button" onClick={() => playGame('X')}>
        <h1 style={{color: '#E2B654'}}>X</h1>
        </button>
        <button className="oBox" type="button" onClick={() => playGame('O')}>
        <h1 style={{color: '#3FACD6'}}>O</h1>
        </button>
    </div>
</div>

    );
}

export default StartBox;