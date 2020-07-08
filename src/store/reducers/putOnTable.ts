import { ICard } from "../../services/game";

export const onTheTable1 = (
  state = new Map<number, ICard>(),
  action: { type: string; payload: any }
) => {
  const { key, value } = action.payload || { key: -1, value: "" };
  const onTheTableMap = new Map(state);

  switch (action.type) {
    case "PUT_ON_THE_TABLE_1":
      onTheTableMap.set(key, value);

      return onTheTableMap;

    default:
      return state;
  }
};

export const onTheTable2 = (
  state = new Map<number, ICard>(),
  action: { type: string; payload: any }
) => {
  const { key, value } = action.payload || { key: -1, value: "" };
  const onTheTableMap = new Map(state);

  switch (action.type) {
    case "PUT_ON_THE_TABLE_2":
      onTheTableMap.set(key, value);

      return onTheTableMap;

    default:
      return state;
  }
};
