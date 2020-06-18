import { ICard } from "../../services/game";

const discarded = (
  state = new Map<number, ICard>(),
  action: { type: string; payload: any }
) => {
  const { key, value } = action.payload || { key: -1, value: "" };
  const discardedMap = new Map(state);

  switch (action.type) {
    case "DISCARDED":
      discardedMap.set(key, value);

      return discardedMap;

    case "USER_GOT_FROM_DISCARDED_1":
    case "USER_GOT_FROM_DISCARDED_2":
      discardedMap.delete(key);

      return discardedMap;

    default:
      return state;
  }
};

export default discarded;
