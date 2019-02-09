import { combineReducers, createStore } from "redux";
import { playerReducer } from "../Components/Player/reducer";
import { roadReducer } from "../Components/Road/reducer";

const rootReducer = combineReducers({
  player: playerReducer,
  road: roadReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
