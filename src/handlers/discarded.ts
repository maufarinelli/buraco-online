import { EVENTS } from "../global/EVENTS";
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

export const handleGetFromDiscarded = (
  userType: string,
  cardKey: number,
  socket: SocketIOClient.Socket
) => {
  socket.emit(EVENTS.GET_FROM_DISCARDED, { userType, cardKey });
};

export const handleUserGotFromDiscarded = (data: string, context: any) => {
  const { inTurn, discarded } = JSON.parse(data);

  const parserDiscarded = JSON.parse(discarded).reduce(
    (acc: Map<string, ICard>, current: any[]) => {
      acc.set(current[0], current[1]);
      return acc;
    },
    new Map<string, ICard>()
  );

  context.setInTurn(inTurn);
  context.setDiscarded(parserDiscarded);
};
