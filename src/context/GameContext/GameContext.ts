import React from "react";
import { ICard } from "../../services/game";

export interface IInTurnState {
  user: "user1" | "user2";
  phase: "taking card" | "need to discard" | "pass turn";
}

export interface IUserState {
  name: string;
  id: string;
  type: "user1" | "user2";
  inHand: Map<number, ICard>;
  onTheTable: {
    games: Map<number, ICard>[];
  };
  tableActive: boolean;
}

export interface IInTurnState {
  user: "user1" | "user2";
  phase: "taking card" | "need to discard" | "pass turn";
}

interface IGameContext {
  user: IUserState | undefined;
  setUser: (user: IUserState) => void;

  inTurn: IInTurnState;
  setInTurn: (inTurn: IInTurnState) => void;
}

const initialGameContext: IGameContext = {
  user: {
    name: "",
    id: "",
    type: "user1",
    inHand: new Map<number, ICard>(),
    onTheTable: {
      games: [],
    },
    tableActive: false,
  },
  setUser: (user: IUserState) => {},

  inTurn: {
    user: "user1",
    phase: "taking card",
  },
  setInTurn: (inTurn: IInTurnState) => {},
};

const GameContext = React.createContext<IGameContext>(initialGameContext);

export default GameContext;
