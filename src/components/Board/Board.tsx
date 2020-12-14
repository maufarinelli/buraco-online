import React, { useState, useEffect, useContext } from "react";
import ActionsContext from "../../context/ActionsContext/ActionsContext";
import GameContext, {
  IInTurnState,
  initialUser,
  initialOtherUser,
  IUserState,
  IBothUsersState,
} from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { discard } from "../../context/ActionsContext/ActionsContext";
import {
  handleChangeUser,
  handleErrorPutCardOnTable,
  handleOtherUserTableChanged,
  handleUserCardsChanged,
} from "../../handlers/user";
import { ICard } from "../../services/game";
import Deck from "../Deck/Deck";
import Header from "../Header/Header";
import { TableWrapper } from "../styles";
import Table from "../Table/Table";
import UserToolbar from "../UserToolbar/UserToolbar";
import { BoardWrapper, Wrapper } from "./styles";
import { EVENTS } from "../../global/EVENTS";
import {
  handleDiscardedChanged,
  handleUserGotFromDiscarded,
} from "../../handlers/discarded";
import UserTable from "../UserTable/UserTable";
import { handleChangePhase } from "../../handlers/inTurn";
import OtherUserTableCards from "../OtherUserTableCards/OtherUserTableCards";

const Board: React.FC = () => {
  const [user, setUser] = useState<IUserState>(initialUser);
  const [otherUser, setOtherUser] = useState<IBothUsersState>(initialOtherUser);
  const [inTurn, setInTurn] = useState<IInTurnState>({
    user: "user1",
    phase: "taking card",
  });
  const [isDiscardMode, setDiscardMode] = useState(false);
  const [isPutOnTableMode, setPutOnTableMode] = useState(false);
  const [discarded, setDiscarded] = useState(new Map<number, ICard>());
  const [isErrorPutCardOnTable, setErrorPutCardOnTable] = useState(false);

  const socket = useContext(SocketContext);
  const gameContext = {
    user,
    setUser,
    otherUser,
    setOtherUser,
    inTurn,
    setInTurn,
    discarded,
    setDiscarded,
    isErrorPutCardOnTable,
    setErrorPutCardOnTable,
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

    socket.on(EVENTS.CHANGE_PHASE, (data: { inTurn: IInTurnState }) => {
      handleChangePhase(data, gameContext);
    });

    socket.on(EVENTS.ERROR_PUT_CARD_ON_TABLE, (data: string) => {
      handleErrorPutCardOnTable(gameContext);
    });
  }, []);

  useEffect(() => {
    if (user.id) {
      socket.on(EVENTS.OTHER_USER_TABLE_CHANGED, (data: string) => {
        handleOtherUserTableChanged(data, gameContext);
      });
    }
  }, [user.id]);

  const handleGetFromDeckClick = () => {
    socket.emit(EVENTS.GET_CARD_FROM_DECK, user?.type);
  };

  // Render
  if (!user) return null;
  return (
    <GameContext.Provider value={gameContext}>
      <Wrapper>
        <Header />
        <BoardWrapper>
          <ActionsContext.Provider value={actionsContext}>
            <OtherUserTableCards />
            <TableWrapper>
              <Deck handleGetFromDeckClick={handleGetFromDeckClick} />
              <Table />
            </TableWrapper>
            <UserToolbar />
            <UserTable />
          </ActionsContext.Provider>
        </BoardWrapper>
      </Wrapper>
    </GameContext.Provider>
  );
};

export default Board;
