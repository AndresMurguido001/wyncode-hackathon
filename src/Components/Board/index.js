import React from "react";
import Player from "../Player";
import Road from "../Road";
import ronald from "../../imgs/ronald.png";
import mcdonalds from "../../imgs/mcdonalds.jpeg";
// cellTypes = Grass, Car, Whopper
// 540, 480. 420, 360, 300, 240, 180, 120, 60 - Diff top values
class Board extends React.Component {
  state = {
    gameOver: false
  };
  gameOver = () => {
    this.setState({
      gameOver: true
    });
  };
  render() {
    const { height, width } = this.props;
    const { gameOver } = this.state;
    const enemies = [mcdonalds, ronald];
    const random = Math.floor(Math.random() * enemies.length);
    const enemy = enemies[random];

    if (gameOver) {
      return (
        <div
          style={{
            fontSize: 0,
            width: width,
            height: height,
            margin: "20px auto",
            backgroundColor: "red",
            position: "relative"
          }}
        />
      );
    }

    return (
      <div
        style={{
          fontSize: 0,
          width: width,
          height: height,
          margin: "20px auto",
          backgroundColor: gameOver ? "red" : "green",
          position: "relative"
        }}
      >
        <Road gameOver={this.gameOver} enemy={enemy} top={120} height={70} />
        <Road gameOver={this.gameOver} enemy={enemy} top={240} height={60} />
        <Road gameOver={this.gameOver} enemy={enemy} top={360} height={120} />
        <Player />
      </div>
    );
  }
}

export default Board;
