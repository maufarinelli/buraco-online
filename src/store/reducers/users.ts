import { initializedGame, ICard } from "../../services/game";

const initialUser1 = {
  inHand: initializedGame.user1Cards,
  onTheTable: new Map<number, ICard>(),
};

const initialUser2 = {
  inHand: initializedGame.user2Cards,
  onTheTable: new Map<number, ICard>(),
};

export const user1 = (
  state = initialUser1,
  action: { type: string; payload: any }
) => {
  const { key, value } = action.payload || { key: -1, value: "" };
  const inHand = new Map(state.inHand);

  switch (action.type) {
    case "ADD_TO_HAND_1":
      inHand.set(key, value);

      return {
        ...state,
        inHand,
      };

    case "CHANGE_CARDS_POSITION_IN_HAND_1":
      return {
        ...state,
        inHand: action.payload,
      };

    case "DISCARD_1":
      inHand.delete(key); // number of key in the deck

      return {
        ...state,
        inHand,
      };

    case "USER_GOT_FROM_DISCARDED_1":
      inHand.set(key, value);

      return {
        ...state,
        inHand,
      };

    case "PUT_ON_THE_TABLE_1":
      const onTheTable = new Map(state.onTheTable);

      inHand.delete(key);
      onTheTable.set(key, value);

      return {
        inHand,
        onTheTable,
      };

    default:
      return state;
  }
};

export const user2 = (
  state = initialUser2,
  action: { type: string; payload: any }
) => {
  const { key, value } = action.payload || { key: -1, value: "" };
  const inHand = new Map(state.inHand);

  switch (action.type) {
    case "ADD_TO_HAND_2":
      inHand.set(key, value);

      return {
        ...state,
        inHand,
      };

    case "CHANGE_CARDS_POSITION_IN_HAND_2":
      return {
        ...state,
        inHand: action.payload,
      };

    case "DISCARD_2":
      inHand.delete(key); // number of key in the deck

      return {
        ...state,
        inHand,
      };

    case "USER_GOT_FROM_DISCARDED_2":
      inHand.set(key, value);

      return {
        ...state,
        inHand,
      };

    case "PUT_ON_THE_TABLE_2":
      const onTheTable = new Map(state.onTheTable);

      inHand.delete(key);
      onTheTable.set(key, value);

      return {
        inHand,
        onTheTable,
      };

    default:
      return state;
  }
};
