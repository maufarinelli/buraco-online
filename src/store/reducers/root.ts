import { combineReducers } from "redux";

import deck from "./deck";
import discarded from "./discarded";
import { user1, user2 } from "./users";
import inTurn from "./inTurn";

export default combineReducers({
  deck,
  discarded,
  user1,
  user2,
  inTurn,
});
