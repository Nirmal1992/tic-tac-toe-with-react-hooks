import React from "react";
import "./styles.css";
import Game from "./components/Game";

export default function App() {
  return (
    <div className="App">
      <div
        style={{
          padding: "2em"
        }}
      >
        <h1
          style={{
            fontSize: "3.5em"
          }}
        >
          Tic Tac Toe
        </h1>
      </div>
      <Game />
      <p style={{ marginBottom: "1em" }}> Made With </p>
      <p class="heart" />
      <p style={{ marginTop: "1em" }}>Nirmal</p>
    </div>
  );
}
