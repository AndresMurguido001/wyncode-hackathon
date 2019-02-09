import React from "react";
import burger from "../../imgs/burger.png";
import { SPRITE_SIZE } from "../../config/constants";
import { connect } from "react-redux";
import { movePlayer } from "./movement";

class Player extends React.Component {
  render() {
    let { position } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url(${burger})`,
          position: "absolute",
          top: position[1],
          left: position[0],
          height: `${SPRITE_SIZE}px`,
          width: `${SPRITE_SIZE}px`
        }}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.player
  };
};
export default connect(mapStateToProps)(movePlayer(Player));
