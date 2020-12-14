import React from "react";
import { ICard } from "../../services/game";

export type TUserType = "user1" | "user2";

export type phases =
  | "taking card"
  | "need to discard"
  | "putting game on the table - need to discard"
  | "putting game on the table - pass turn"
  | "pass turn";
export interface IInTurnState {
  user: TUserType;
  phase: phases;
}

export interface IBothUsersState {
  name: string;
  type: TUserType;
  onTheTable: Map<number, ICard>[];
}

export interface IUserState extends IBothUsersState {
  id: string;
  inHand: Map<number, ICard>;
}

export interface IGameContext {
  user: IUserState;
  setUser: (user: IUserState) => void;

  otherUser: IBothUsersState;
  setOtherUser: (user: IBothUsersState) => void;

  inTurn: IInTurnState;
  setInTurn: (inTurn: IInTurnState) => void;

  discarded: Map<number, ICard>;
  setDiscarded: (cards: Map<number, ICard>) => void;

  isErrorPutCardOnTable: boolean;
  setErrorPutCardOnTable: (isError: boolean) => void;
}

export const initialUser = {
  name: "",
  id: "",
  type: "user1" as TUserType,
  inHand: new Map<number, ICard>(),
  onTheTable: [],
};

export const initialOtherUser = {
  name: "",
  type: "user2" as TUserType,
  onTheTable: [],
};

const initialGameContext: IGameContext = {
  user: initialUser,
  setUser: (user: IUserState) => {},

  otherUser: initialOtherUser,
  setOtherUser: (user: IBothUsersState) => {},

  inTurn: {
    user: "user1",
    phase: "taking card",
  },
  setInTurn: (inTurn: IInTurnState) => {},

  discarded: new Map<number, ICard>(),
  setDiscarded: (cards: Map<number, ICard>) => {},

  isErrorPutCardOnTable: false,
  setErrorPutCardOnTable: (isError: boolean) => {},
};

const GameContext = React.createContext<IGameContext>(initialGameContext);

export default GameContext;
