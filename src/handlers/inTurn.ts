import { IInTurnState } from "../context/GameContext/GameContext";

export const handleChangePhase = (
  data: { inTurn: IInTurnState },
  context: any
) => {
  const { inTurn } = data;

  context.setInTurn(inTurn);
};
