import React from "react";
import Square from "./Square";
import "./Board.css";

const style = {
  border: "4px solid darkblue",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  margin: "0 auto",
  width: "50vh",
  height: "50vh",
  minWidth: "50px",
  minHeight: "50px"
};
const Board = ({ onClick, squares }) => {
  return (
    <div className="board">
      {squares.map((sq, i) => (
        <Square key={i.toString()} value={sq} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
