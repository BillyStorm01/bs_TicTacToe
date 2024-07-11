import React, { useState } from "react";
import StartBox from "./StartBox";
import GameBoard from "./GameBoard";

const MainMenu = () => {
    const [start, startGame] = useState(false);
    const [player, setPlayer] = useState(false);
        return start ? (
            <GameBoard player = {player} />
        ) : (
            <div>
                <div className="gameHeader mt-5">
                    <h1 className="topHead"><strong>Tick Tack Toe</strong> in React.js</h1>
                    <h2 className="subHead mt-3"><strong>Pick A Weapon</strong></h2>
                </div>
                <StartBox startGame = {startGame} setPlayer = {setPlayer}/>
            </div>
        ) 

}

export default MainMenu;