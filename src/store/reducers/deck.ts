import { initializedGame } from "../../services/game";

const deck = (
  state = initializedGame.deck,
  action: { type: string; payload: any }
) => {
  const { key } = action.payload || -1;

  switch (action.type) {
    case "REMOVE_FROM_DECK":
      const deck = new Map(state);
      deck.delete(key); // number of key in the deck

      return deck;

    default:
      return state;
  }
};

export default deck;
