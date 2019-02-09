import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../config/constants";
import { BOARD_WIDTH } from "../../config/constants";

class Road extends React.Component {
  state = {
    direction: null,
    left: 0
  };
  randomStart = [0, BOARD_WIDTH - SPRITE_SIZE];
  rdm = Math.floor(Math.random() * this.randomStart.length);
  componentDidMount() {
    this.setState({
      direction: this.rdm === 0 ? "right" : "left"
    });
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.tick);
  }

  tick = () => {
    const { left, direction } = this.state;
    let { pos } = this.props;
    let newPos = left;

    if (direction === "right") {
      newPos = left + 10;
    } else if (direction === "left") {
      newPos = left - 20;
    }

    if (pos[1] === this.props.top && pos[0] === left) {
      this.props.gameOver();
    }

    let newDir = direction;
    if (direction === "left" && left === -BOARD_WIDTH) {
      console.log(left);
      newPos = BOARD_WIDTH;
    } else if (direction === "right" && left === BOARD_WIDTH) {
      newPos = 0;
    }

    this.setState({
      left: newPos
    });
    setTimeout(this.tick, 100);
  };
  render() {
    const { top, height, enemy } = this.props;
    return (
      <div
        style={{
          backgroundColor: "#000",
          width: "100%",
          height: height,
          position: "absolute",
          top: top
        }}
      >
        <div
          style={{
            position: "relative",
            left: this.randomStart[this.rdm],
            transform: `translateX(${this.state.left}px)`,
            width: SPRITE_SIZE,
            height: SPRITE_SIZE,
            backgroundImage: `url(${enemy})`
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.road,
    pos: state.player.position
  };
};

export default connect(mapStateToProps)(Road);
