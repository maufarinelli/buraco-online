import { IInTurnState } from "../context/GameContext/GameContext";
import { ICard } from "../services/game";

const parseToCardMap = (cards: string) =>
  JSON.parse(cards).reduce((acc: Map<string, ICard>, current: any[]) => {
    acc.set(current[0], current[1]);
    return acc;
  }, new Map<string, ICard>());

export const handleUserCardsChanged = (data: string, context: any) => {
  const parsedData: { user: any; inTurn: IInTurnState } = JSON.parse(data);

  const parsedUser = {
    ...parsedData.user,
    inHand: parseToCardMap(parsedData.user.inHand),
    onTheTable: parsedData.user.onTheTable.map((game: string) =>
      parseToCardMap(game)
    ),
  };

  context.setUser(parsedUser);
  context.setInTurn(parsedData.inTurn);
  context.setErrorPutCardOnTable(false);
};

export const handleChangeUser = (
  data: { inTurn: IInTurnState },
  context: any
) => {
  const { inTurn } = data;
  context.setInTurn(inTurn);
};

export const handleErrorPutCardOnTable = (context: any) => {
  context.setErrorPutCardOnTable(true);
};
