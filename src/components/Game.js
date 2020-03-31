import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../utils/calculateWinner";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = index => {
    if (winner || board[index]) {
      return;
    }
    if (isXNext) {
      setBoard(board => {
        board[index] = "X";
        return board;
      });
    } else {
      setBoard(board => {
        board[index] = "O";
        return board;
      });
    }
    setIsXNext(!isXNext);
  };

  const Reset = () => {
    return (
      <button
        style={{
          padding: "1em 3em",
          margin: "2em auto",
          border: isXNext ? "4px solid darkblue" : "",
          borderRadius: "2em",
          fontSize: "1em",
          fontWeight: "bold",
          background: "skyblue",
          width: "90%",
          display: "block"
        }}
        onClick={() => {
          setBoard(Array(9).fill(null));
        }}
      >
        START AGAIN{" "}
      </button>
    );
  };
  return (
    <div>
      <Board onClick={handleClick} squares={board} isXNext={isXNext} />
      <button
        style={{
          padding: "1rem 2rem",
          margin: "2rem 0.5rem",
          border: isXNext ? "4px solid darkblue" : "",
          borderRadius: "2em",
          fontSize: "1em",
          fontWeight: "bold",
          background: "skyblue"
        }}
      >
        Player <strong style={{ fontSize: "1.5em" }}>X</strong>
      </button>
      <button
        style={{
          padding: "1rem 2rem",
          margin: "2rem 0.5rem",
          border: !isXNext ? "4px solid darkblue" : "",
          background: "skyblue",
          borderRadius: "2em",
          fontSize: "1em",
          fontWeight: "bold"
        }}
      >
        {" "}
        Player <strong style={{ fontSize: "1.5em" }}>O</strong>
      </button>
      {winner && (
        <div
          style={{
            color: "green",
            fontSize: "2em",
            padding: "0.5em 1em",
            width: "80%",
            background: "white",
            borderRadius: "3em",
            margin: "0 auto"
          }}
        >
          Player {winner} has Won!!!
        </div>
      )}
      {(winner || board.indexOf(null) === -1) && <Reset />}
    </div>
  );
};

export default Game;
