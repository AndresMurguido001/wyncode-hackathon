import React, { Component } from "react";
import "./App.css";
import Board from "./Components/Board";

class App extends Component {
  render() {
    let { height, width } = this.props;
    return (
      <div>
        <Board height={height} width={width} cellSize={40} />
      </div>
    );
  }
}

export default App;
