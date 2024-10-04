
import React, { useState } from "react";
import StartBox from "./StartBox";
import GameBoard from "./GameBoard"
import '/src/styles/component-css/main-menu.css'

const MainMenu = () => {
    const [start, startGame] = useState(false);
    const [player, setPlayer] = useState(false);
    return start ? (
        <GameBoard player={player} />
    ) : (
        <div className="main-menu">
            <h1 className="main-menu__header"><strong>Tick Tack Toe</strong> in React.js</h1>
            <StartBox startGame={startGame} setPlayer={setPlayer} />
        </div>
    )

}

export default MainMenu;