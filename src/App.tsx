import React from "react";
import "./App.css";
import Board from "./components/Board/Board";
import "./services/game";

// @ts-ignore
Array.prototype.swapItems = function (a: any, b: any) {
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
};

function App() {
  return <Board />;
}

export default App;
