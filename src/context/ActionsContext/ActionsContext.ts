import React from "react";
import { EVENTS } from "../../global/EVENTS";

interface IActionsContext {
  isDiscardMode: boolean;
  setDiscardMode: (mode: boolean) => void;

  isPutOnTableMode: boolean;
  setPutOnTableMode: (mode: boolean) => void;

  discard: (
    userType: string,
    cardKey: number,
    socket: SocketIOClient.Socket
  ) => void;
}

export const discard = (
  userType: string,
  cardKey: number,
  socket: SocketIOClient.Socket
) => {
  socket.emit(EVENTS.DISCARD, { userType, cardKey });
};

export const initialActionsContext = {
  isDiscardMode: false,
  setDiscardMode: (mode: boolean) => {},

  isPutOnTableMode: false,
  setPutOnTableMode: (mode: boolean) => {},

  discard,
};

const ActionsContext = React.createContext<IActionsContext>(
  initialActionsContext
);

export default ActionsContext;
