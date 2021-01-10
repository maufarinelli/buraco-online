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
  user1Name: string;
  user2Name: string;
  phase: phases;
}

export interface IBothUsersState {
  name: string;
  type: TUserType;
  onTheTable: Map<number, ICard>[];
  hasMorto: boolean;
  hasCanaster: boolean;
}

export interface IUserState extends IBothUsersState {
  screenId: string;
  inHand: Map<number, ICard>;
}

export interface IGameState {
  user1_phase: "initial" | "morto" | "won";
  user2_phase: "initial" | "morto" | "won";
}

export type TWinner = null | "user1" | "user2";

export interface IGameContext {
  user: IUserState;
  setUser: (user: IUserState) => void;

  otherUser: IBothUsersState;
  setOtherUser: (user: IBothUsersState) => void;

  inTurn: IInTurnState;
  setInTurn: (inTurn: IInTurnState) => void;

  discarded: Map<number, ICard>;
  setDiscarded: (cards: Map<number, ICard>) => void;

  deckSize: number;
  setDeckSize: (size: number) => void;

  isErrorPutCardOnTable: boolean;
  setErrorPutCardOnTable: (isError: boolean) => void;

  isErrorCannotFinishGame: boolean;
  setErrorCannotFinishGame: (isError: boolean) => void;

  gotMorto: boolean;
  setGotMortoMessage: (gotMorto: boolean) => void;

  isGameOver: boolean;
  setGameOver: (isGameOver: boolean) => void;

  winner: TWinner;
  setWinner: (winner: TWinner) => void;
}

export const initialUser = {
  name: "",
  screenId: "",
  type: "user1" as TUserType,
  inHand: new Map<number, ICard>(),
  onTheTable: [],
  hasMorto: false,
  hasCanaster: false,
};

export const initialOtherUser = {
  name: "",
  type: "user2" as TUserType,
  onTheTable: [],
  hasMorto: false,
  hasCanaster: false,
};

const initialGameContext: IGameContext = {
  user: initialUser,
  setUser: (user: IUserState) => {},

  otherUser: initialOtherUser,
  setOtherUser: (user: IBothUsersState) => {},

  inTurn: {
    user: "user1",
    user1Name: "",
    user2Name: "",
    phase: "taking card",
  },
  setInTurn: (inTurn: IInTurnState) => {},

  discarded: new Map<number, ICard>(),
  setDiscarded: (cards: Map<number, ICard>) => {},

  deckSize: 62,
  setDeckSize: (size: number) => {},

  isErrorPutCardOnTable: false,
  setErrorPutCardOnTable: (isError: boolean) => {},

  isErrorCannotFinishGame: false,
  setErrorCannotFinishGame: (isError: boolean) => {},

  gotMorto: false,
  setGotMortoMessage: (gotMorto: boolean) => {},

  isGameOver: false,
  setGameOver: (isGameOver: boolean) => {},

  winner: null,
  setWinner: (winner: TWinner) => null,
};

const GameContext = React.createContext<IGameContext>(initialGameContext);

export default GameContext;
