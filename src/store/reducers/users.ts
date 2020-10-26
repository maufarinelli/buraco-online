import { initializedGame, ICard } from "../../services/game";

export interface IUserState {
  inHand: Map<number, ICard>;
  onTheTable: {
    games: Map<number, ICard>[];
  };
  tableActive: boolean;
}

const initialUser1: IUserState = {
  inHand: initializedGame.user1Cards,
  onTheTable: { games: [new Map()] },
  tableActive: false,
};

const initialUser2: IUserState = {
  inHand: initializedGame.user2Cards,
  onTheTable: { games: [new Map()] },
  tableActive: false,
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

    case "ACTIVATE_PUT_ON_THE_TABLE_1":
      return {
        ...state,
        tableActive: true,
      };

    case "CHANGE_USER":
      return {
        ...state,
        tableActive: false,
      };

    case "ADD_NEW_GAME_1":
      let cardsInHand = inHand;
      for (const [key, value] of action.payload.entries()) {
        cardsInHand.delete(key);
      }

      return {
        ...state,
        inHand: cardsInHand,
        onTheTable: {
          games: [...state.onTheTable.games, action.payload],
        },
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

    case "ACTIVATE_PUT_ON_THE_TABLE_2":
      return {
        ...state,
        tableActive: true,
      };

    case "CHANGE_USER":
      return {
        ...state,
        tableActive: false,
      };

    case "ADD_NEW_GAME_2":
      let cardsInHand = inHand;
      for (const [key, value] of action.payload.entries()) {
        cardsInHand.delete(key);
      }

      return {
        ...state,
        inHand: cardsInHand,
        onTheTable: {
          games: [...state.onTheTable.games, action.payload],
        },
      };

    default:
      return state;
  }
};
