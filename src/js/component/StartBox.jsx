import React from "react";

const StartBox = ({startGame, setPlayer}) => {
      const playGame = (piece) => {
        startGame(true)
        setPlayer(piece)
      }
    return (
<div className="container startBox p-3 mx-auto mt-5">
        <h4 className="mt-4 text-center"><strong>CHOOSE YOUR WEAPON</strong></h4>
        <div className="inputs text-center">
        <input placeholder="Player 1 username"></input>
        <input placeholder="Player 2 username"></input>
        </div>
    <div className="d-flex justify-content-center">
        <button className="xBox mx-1 my-3 px-3" type="button" onClick={() => playGame('X')}>
        <h1 className="mb-0 text-center" style={{color: '#E2B654'}}>X</h1>
        </button>
        <button className="oBox mx-1 my-3 px-3" type="button" onClick={() => playGame('O')}>
        <h1 className="mb-0 text-center" style={{color: '#3FACD6'}}>O</h1>
        </button>
    </div>
</div>

    );
}

export default StartBox;