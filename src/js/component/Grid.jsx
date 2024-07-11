import React, { useState } from "react";
import Square from "./Square";

export default function Grid() {
    const [isNext, setIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isWon, setIsWon] = useState(false)

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (isNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setIsNext(!isNext);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = winner + " Wins!";
        
    } else {
        status = "It is " + (isNext ? "X" : "O") + "'s" + " turn!";
    }
    return (
        <>
            <div className="gridContainer">
                <div className="status text-center" style={{ fontSize: '25px' }}>{status}</div>
                <div className="board-row d-flex">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="board-row d-flex">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="board-row d-flex">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
                <button className="reset mt-3 mx-auto d-flex" onClick={() => { setSquares(Array(9).fill(null)) }}>Rest Game</button>
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
