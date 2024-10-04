import React, { useState } from "react";
import Grid from "./Grid";

export default function GameBoard ({status}) {
    return (
        <div>
            <div className="gameHeader">
                <h1 className="topHead"><strong>Tick Tack Toe</strong> in React.js</h1>
                <h2 className="subHead"><strong>{status}</strong></h2>
            </div>
            <div>
                <Grid />
            </div>
        </div>
    );
}