import React, { useState, useEffect, useContext } from "react";
import ActionsContext from "../../context/ActionsContext/ActionsContext";
import GameContext, {
  IInTurnState,
  initialUser,
  IUserState,
} from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { discard } from "../../context/ActionsContext/ActionsContext";
import { handleChangeUser, handleUserCardsChanged } from "../../handlers/user";
import { ICard } from "../../services/game";
import ContextMenu from "../ContextMenu/ContextMenu";
import Deck from "../Deck/Deck";
import Header from "../Header/Header";
import { TableWrapper, UserTableWrapper } from "../styles";
import Table from "../Table/Table";
import UserCards from "../UserCards/UserCards";
import UserTable from "../UserTable/UserTable";
import UserToolbar from "../UserToolbar/UserToolbar";
import { BoardWrapper, GameWrapper } from "./styles";
import { EVENTS } from "../../global/EVENTS";
import {
  handleDiscardedChanged,
  handleUserGotFromDiscarded,
} from "../../handlers/discarded";

const Board: React.FC = () => {
  const [user, setUser] = useState<IUserState>(initialUser);
  const [inTurn, setInTurn] = useState<IInTurnState>({
    user: "user1",
    phase: "taking card",
  });
  const [isDiscardMode, setDiscardMode] = useState(false);
  const [isPutOnTableMode, setPutOnTableMode] = useState(false);
  const [discarded, setDiscarded] = useState(new Map<number, ICard>());

  const socket = useContext(SocketContext);
  const gameContext = {
    user,
    setUser,
    inTurn,
    setInTurn,
    discarded,
    setDiscarded,
  };
  const actionsContext = {
    isDiscardMode,
    setDiscardMode,
    isPutOnTableMode,
    setPutOnTableMode,
    discard,
  };

  useEffect(() => {
    socket.on(EVENTS.INIT_GAME, (data: string) => {
      handleUserCardsChanged(data, gameContext);
    });

    socket.on(EVENTS.CARD_ADDED_TO_HAND, (data: string) => {
      handleUserCardsChanged(data, gameContext);
    });

    socket.on(EVENTS.USER_DISCARDED, (data: string) => {
      handleUserCardsChanged(data, gameContext);
    });

    socket.on(EVENTS.ADD_TO_DISCARDED, (data: string) => {
      handleDiscardedChanged(data, gameContext);
    });

    socket.on(EVENTS.CHANGE_USER, (data: { inTurn: IInTurnState }) => {
      handleChangeUser(data, gameContext);
    });

    socket.on(EVENTS.USER_GOT_FROM_DISCARDED, (data: string) => {
      handleUserGotFromDiscarded(data, gameContext);
    });
  }, []);

  const handleGetFromDeckClick = () => {
    socket.emit(EVENTS.GET_CARD_FROM_DECK, user?.type);
  };

  // Render
  if (!user) return null;
  return (
    <GameContext.Provider value={gameContext}>
      <Header />
      <BoardWrapper>
        <ActionsContext.Provider value={actionsContext}>
          <TableWrapper>
            <Deck handleGetFromDeckClick={handleGetFromDeckClick} />
            <Table />
          </TableWrapper>
          <UserToolbar />
          <UserCards />
        </ActionsContext.Provider>
      </BoardWrapper>
    </GameContext.Provider>
  );
};

export default Board;
