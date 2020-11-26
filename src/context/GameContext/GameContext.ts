import React from "react";
import { ICard } from "../../services/game";

export type TUserType = "user1" | "user2";

export interface IInTurnState {
  user: TUserType;
  phase: "taking card" | "need to discard" | "pass turn";
}

export interface IUserState {
  name: string;
  id: string;
  type: TUserType;
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

export interface IGameContext {
  user: IUserState;
  setUser: (user: IUserState) => void;

  inTurn: IInTurnState;
  setInTurn: (inTurn: IInTurnState) => void;

  discarded: Map<number, ICard>;
  setDiscarded: (cards: Map<number, ICard>) => void;
}

// export const openContextMenu = (cardKey: string) => {
//   // if (isTable) {
//   //   setTableContext(true);
//   // } else {
//   //   setTableContext(false);
//   // }

//   if (user && cardKey) {
//     //   const top = event.clientY + 20;
//     //   const left = event.clientX + 30;

//     //   setContextMenuTop(top);
//     //   setContextMenuLeft(left);
//     //   toggleContextMenu(true);

//     setCurrentCardKeyClicked();
//   }
// };

export const initialUser = {
  name: "",
  id: "",
  type: "user1" as TUserType,
  inHand: new Map<number, ICard>(),
  onTheTable: {
    games: [],
  },
  tableActive: false,
};

const initialGameContext: IGameContext = {
  user: initialUser,
  setUser: (user: IUserState) => {},

  inTurn: {
    user: "user1",
    phase: "taking card",
  },
  setInTurn: (inTurn: IInTurnState) => {},

  discarded: new Map<number, ICard>(),
  setDiscarded: (cards: Map<number, ICard>) => {},
};

const GameContext = React.createContext<IGameContext>(initialGameContext);

export default GameContext;
