
import React, { useState } from "react";
import Square from "./sqare";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setIsXturn] = useState(true);

    const checkWinner = () => {
        const winnerPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], 
            [2, 4, 6],
            [0, 4, 8],
        ];

        for (let i of winnerPatterns) {
            const [a, b, c] = i;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];  // Return the winner ("X" or "O")
            }
        }
        return null;
    };

    const winner = checkWinner();
    const isDraw = !winner && state.every((square) => square !== null); // Check if all squares are filled

    const handleClick = (index) => {
        if (state[index] !== null || winner) return; // Prevents overwriting or playing after a win

        const newState = [...state];
        newState[index] = isXturn ? "X" : "O"; 
        setState(newState);
        setIsXturn(!isXturn);
    };

    return (
        <div className="bg-slate-800 h-screen w-full flex items-center justify-center">
            <div className="bg-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center max-w-md sm:max-w-lg">
                <h2 className="font-medium text-lg sm:text-xl mb-3">
                    {winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" : `Next Player: ${isXturn ? "X" : "O"}`}
                </h2>

                <div className="grid grid-cols-3 gap-2">
                    {state.map((value, index) => (
                        <Square key={index} onClick={() => handleClick(index)} value={value} />
                    ))}
                </div>

                {(winner || isDraw) && (
                    <button 
                        onClick={() => setState(Array(9).fill(null))}
                        className="mt-4 p-2 bg-blue-500 text-white rounded-lg">
                        Restart Game
                    </button>
                )}
            </div>
        </div>
    );
};

export default Board;
