import store from "../../config/store";
import { SPRITE_SIZE, BOARD_WIDTH } from "../../config/constants";

export function getRandomPosition() {
  return random;
}

export function moveEnemies() {
  let enemyPos = store.getState().road.enemyPos;
  let newPos =
    enemyPos > -SPRITE_SIZE ? enemyPos + SPRITE_SIZE : enemyPos - SPRITE_SIZE;
  if (enemyPos > BOARD_WIDTH || enemyPos < -SPRITE_SIZE) {
    newPos = getRandomPosition();
  }
  store.dispatch({
    type: "MOVE_ENEMY",
    payload: {
      enemyPos: newPos
    }
  });
  setTimeout(moveEnemies, 1000);
}
export function dispatchStartingPoint() {
  store.dispatch({
    type: "GET_RANDOM_START",
    payload: {
      enemyPos: getRandomPosition()
    }
  });
}
