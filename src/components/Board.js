import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  margin: "0 auto",
  width: "50vh",
  height: "50vh",
  minWidth: "250px",
  minHeight: "250px"
};
const Board = ({ onClick, squares }) => {
  return (
    <div style={style}>
      {squares.map((sq, i) => (
        <Square key={i.toString()} value={sq} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
