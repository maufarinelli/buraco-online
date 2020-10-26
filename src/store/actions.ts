import { ICard } from "../services/game";

interface IMapItem {
  key: number;
  value: ICard;
}

export const initializeGame = () => ({
  type: "INITIALIZE_GAME",
});

export const removeFromDeck = ({ key, value }: IMapItem) => ({
  type: "REMOVE_FROM_DECK",
  payload: {
    key,
    value,
  },
});

export const changeUser = () => ({
  type: "CHANGE_USER",
});

export const discard = (user: string, { key, value }: IMapItem) => {
  const type = user === "user1" ? "DISCARD_1" : "DISCARD_2";

  return {
    type,
    payload: {
      key,
      value,
    },
  };
};

export const addToDiscarded = ({ key, value }: IMapItem) => {
  return {
    type: "DISCARDED",
    payload: {
      key,
      value,
    },
  };
};

export const getFromDiscarded = (user: string, { key, value }: IMapItem) => {
  const type =
    user === "user1"
      ? "USER_GOT_FROM_DISCARDED_1"
      : "USER_GOT_FROM_DISCARDED_2";

  return {
    type,
    payload: {
      key,
      value,
    },
  };
};

// User Actions
export const addToHand = (user: string, { key, value }: IMapItem) => {
  const type = user === "user1" ? "ADD_TO_HAND_1" : "ADD_TO_HAND_2";

  return {
    type,
    payload: {
      key,
      value,
    },
  };
};

export const changeCardsPositionInHand = (
  user: string,
  cards: Map<number, ICard>
) => {
  const type =
    user === "user1"
      ? "CHANGE_CARDS_POSITION_IN_HAND_1"
      : "CHANGE_CARDS_POSITION_IN_HAND_2";

  return {
    type,
    payload: cards,
  };
};

export const activatePutOnTable = (user: string) => {
  const type =
    user === "user1"
      ? "ACTIVATE_PUT_ON_THE_TABLE_1"
      : "ACTIVATE_PUT_ON_THE_TABLE_2";

  return { type };
};

export const addNewGame = (user: string, cards: Map<number, ICard>) => {
  const type = user === "user1" ? "ADD_NEW_GAME_1" : "ADD_NEW_GAME_2";

  return { type, payload: { cards } };
};
