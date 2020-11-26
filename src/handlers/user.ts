import { IInTurnState } from "../context/GameContext/GameContext";
import { ICard } from "../services/game";

export const handleUserCardsChanged = (data: string, context: any) => {
  const parsedData: { user: any; inTurn: IInTurnState } = JSON.parse(data);

  const parserInHand = JSON.parse(parsedData.user.inHand).reduce(
    (acc: Map<string, ICard>, current: any[]) => {
      acc.set(current[0], current[1]);
      return acc;
    },
    new Map<string, ICard>()
  );
  const parsedUser = {
    ...parsedData.user,
    inHand: parserInHand,
  };

  context.setUser(parsedUser);
  context.setInTurn(parsedData.inTurn);
};

export const handleChangeUser = (
  data: { inTurn: IInTurnState },
  context: any
) => {
  const { inTurn } = data;
  context.setInTurn(inTurn);
};
