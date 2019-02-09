import { BOARD_HEIGHT, SPRITE_SIZE, BOARD_WIDTH } from "../../config/constants";

const initialX = BOARD_WIDTH / 2 - SPRITE_SIZE / 2;
const initialY = BOARD_HEIGHT - SPRITE_SIZE;

const initialState = {
  position: [initialX, initialY]
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
