import { BOARD_WIDTH, BOARD_HEIGHT, SPRITE_SIZE } from "../../config/constants";
import store from "../../config/store";

export function movePlayer(Player) {
  function observeBoundaries(oldPos, newPos) {
    return newPos[0] >= 0 - SPRITE_SIZE &&
      newPos[0] < BOARD_WIDTH &&
      (newPos[1] > 0 - SPRITE_SIZE && newPos[1] < BOARD_HEIGHT)
      ? newPos
      : oldPos;
  }

  function dispatchMove(oldPos, newPos) {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: observeBoundaries(oldPos, newPos)
      }
    });
  }

  function handleKeyDown(e) {
    e.preventDefault();
    let oldPos = store.getState().player.position;
    let newPos;
    switch (e.keyCode) {
      case 38:
        newPos = [oldPos[0], oldPos[1] - SPRITE_SIZE];
        dispatchMove(oldPos, newPos); // NORTH
        return;
      case 39:
        newPos = [oldPos[0] + SPRITE_SIZE, oldPos[1]];
        dispatchMove(oldPos, newPos);
        return;
      case 40:
        newPos = [oldPos[0], oldPos[1] + SPRITE_SIZE];
        dispatchMove(oldPos, newPos);
        return;
      case 37:
        newPos = [oldPos[0] - SPRITE_SIZE, oldPos[1]];
        dispatchMove(oldPos, newPos);
        return;
      default:
        console.log(e.keyCode);
    }
  }

  window.addEventListener("keydown", e => handleKeyDown(e));

  return Player;
}
