import React from "react";
const style = {
  backgroundColor: "skyblue",
  padding: "1em",
  fontSize: "1em",
  fontWeight: "bold",
  outline: "none",
  cursor: "pointer",
  border: "1px solid blue"
};
const Square = ({ onClick, value }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
