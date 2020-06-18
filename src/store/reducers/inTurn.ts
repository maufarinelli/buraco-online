export interface IInTurnState {
  user: "user1" | "user2";
  phase: "taking card" | "need to discard" | "pass turn";
}

const initial: IInTurnState = {
  user: "user1",
  phase: "taking card",
};

const inTurn = (state = initial, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "CHANGE_USER":
      if (state.user === "user1") {
        return {
          user: "user2",
          phase: "taking card",
        };
      }
      return {
        user: "user1",
        phase: "taking card",
      };

    case "USER_GOT_FROM_DISCARDED_1":
    case "USER_GOT_FROM_DISCARDED_2":
      return {
        ...state,
        phase: "pass turn",
      };

    case "REMOVE_FROM_DECK":
      return {
        ...state,
        phase: "need to discard",
      };

    default:
      return state;
  }
};

export default inTurn;
