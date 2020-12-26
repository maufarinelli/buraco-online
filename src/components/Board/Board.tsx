import React, { useState, useEffect, useContext } from "react";
import ActionsContext from "../../context/ActionsContext/ActionsContext";
import GameContext, {
  IInTurnState,
  initialUser,
  initialOtherUser,
  IUserState,
  IBothUsersState,
  IGameState,
  TWinner,
} from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { discard } from "../../context/ActionsContext/ActionsContext";
import {
  handleChangeUser,
  handleErrorCannotFinishGame,
  handleErrorPutCardOnTable,
  handleGotMorto,
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
import { handleGameOver } from "../../handlers/game";
import { handleDeckChanged } from "../../handlers/deck";

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
  const [isErrorCannotFinishGame, setErrorCannotFinishGame] = useState(false);
  const [gotMorto, setGotMortoMessage] = useState(false);
  const [deckSize, setDeckSize] = useState(62);
  const [isGameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<TWinner>(null);

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
    deckSize,
    setDeckSize,
    isErrorPutCardOnTable,
    setErrorPutCardOnTable,
    isErrorCannotFinishGame,
    setErrorCannotFinishGame,
    gotMorto,
    setGotMortoMessage,
    isGameOver,
    setGameOver,
    winner,
    setWinner,
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

    socket.on(EVENTS.ERROR_CANNOT_FINISH_GAME, (data: string) => {
      handleErrorCannotFinishGame(gameContext);
    });

    socket.on(EVENTS.DECK_CHANGED, (data: string) => {
      handleDeckChanged(data, gameContext);
    });

    socket.on(EVENTS.GOT_MORTO, (data: string) => {
      handleGotMorto(gameContext);
    });

    socket.on(EVENTS.GAME_OVER, (data: IGameState) => {
      handleGameOver(data, gameContext);
    });
  }, []);

  useEffect(() => {
    if (user.id) {
      socket.on(EVENTS.OTHER_USER_TABLE_CHANGED, (data: string) => {
        handleOtherUserTableChanged(data, gameContext);
      });
    }
  }, [user.id]);

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
              <Deck />
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
