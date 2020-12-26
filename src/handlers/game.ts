import { IGameState } from "../context/GameContext/GameContext";

export const handleGameOver = (data: IGameState, context: any) => {
  const { user1_phase } = data;

  const winner = user1_phase === "won" ? "user1" : "user2";

  context.setGameOver(true);
  context.setWinner(winner);
};
