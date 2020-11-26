import { ICard } from "../services/game";

export const handleDiscardedChanged = (data: string, context: any) => {
  const parsedData = JSON.parse(data);

  const parserDiscarded = parsedData.reduce(
    (acc: Map<string, ICard>, current: any[]) => {
      acc.set(current[0], current[1]);
      return acc;
    },
    new Map<string, ICard>()
  );

  context.setDiscarded(parserDiscarded);
};
