import { BOARD_WIDTH, SPRITE_SIZE } from "../../config/constants";

const initialState = {
  enemyPos: 0
};

export const roadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RANDOM_START":
      return {
        ...action.payload
      };
    case "MOVE_ENEMY":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
