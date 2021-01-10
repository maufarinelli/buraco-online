import React, { useContext } from "react";
import styled from "styled-components";
import ActionsContext, {
  discard,
} from "../../context/ActionsContext/ActionsContext";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { EVENTS } from "../../global/EVENTS";
import MessageBar from "../MessageBar/MessageBar";

const Toolbar = styled.div`
  display: flex;
  margin: 10px 10px 20px 10px;
`;

const ToobarTitle = styled.h2`
  display: inline-block;
  margin-top: 10px;
  margin-right: 20px;
`;

const ToolbarList = styled.ul`
  list-style: none;
  margin-top: 15px;
  padding-left: 10px;
`;

const ToolbarListItem = styled.li`
  display: inline-block;
  margin-right: 5px;
`;

const UserToolbar = () => {
  const {
    user,
    inTurn,
    isErrorCannotFinishGame,
    gotMorto,
    winner,
  } = useContext(GameContext);
  const { isDiscardMode, setDiscardMode, setPutOnTableMode } = useContext(
    ActionsContext
  );
  const socket = useContext(SocketContext);

  const handleDiscardButtonClick = () => {
    setDiscardMode(true);
  };

  const handlePassTurnClick = () => {
    setPutOnTableMode(false);
    socket.emit(EVENTS.PASS_TURN);
  };

  const handleTableActiveClick = () => {
    setPutOnTableMode(true);
    socket.emit(EVENTS.ACTIVATE_TABLE, {
      userType: user.type,
      currentPhase: inTurn.phase,
    });
  };

  const handleEndPutCardsOnTable = () => {
    setPutOnTableMode(false);
    socket.emit(EVENTS.END_PUT_CARD_ON_TABLE, {
      userType: user.type,
      currentPhase: inTurn.phase,
    });
  };

  return (
    <Toolbar>
      <ToobarTitle
        className={inTurn.user === user.type ? "in-turn" : "not-in-turn"}
      >
        {user.name} - Cartas
      </ToobarTitle>
      <nav>
        <ToolbarList>
          {inTurn.phase === "putting game on the table - need to discard" ||
          inTurn.phase === "putting game on the table - pass turn" ? (
            <ToolbarListItem>
              <button onClick={handleEndPutCardsOnTable}>
                Terminei de baixar jogos
              </button>
            </ToolbarListItem>
          ) : (
            <>
              <ToolbarListItem>
                <button
                  disabled={
                    inTurn.user !== user.type ||
                    inTurn.phase !== "need to discard" ||
                    isDiscardMode
                  }
                  onClick={handleDiscardButtonClick}
                >
                  Descartar
                </button>
              </ToolbarListItem>
              <ToolbarListItem>
                <button
                  disabled={
                    inTurn.user !== user.type || inTurn.phase === "taking card"
                  }
                  onClick={handleTableActiveClick}
                >
                  Descer jogo
                </button>
              </ToolbarListItem>
              <ToolbarListItem>
                <button
                  disabled={
                    inTurn.user !== user.type || inTurn.phase !== "pass turn"
                  }
                  onClick={handlePassTurnClick}
                >
                  Passar a vez
                </button>
              </ToolbarListItem>
            </>
          )}
        </ToolbarList>
      </nav>
      {winner ? (
        <MessageBar>{winner} BATEU. FIM DO JOGO! </MessageBar>
      ) : (
        <>
          {inTurn.phase === "need to discard" && !isDiscardMode && (
            <MessageBar>
              Você precisa descartar ou pode baixar jogos. Clique no botão
              correspondente à ação que deseja realizar.
            </MessageBar>
          )}
          {inTurn.phase === "need to discard" && isDiscardMode && (
            <MessageBar>Clique na carta que você quer descartar.</MessageBar>
          )}
          {inTurn.user === user.type && inTurn.phase === "pass turn" && (
            <MessageBar>
              Você pode baixar jogos ou apenas passar a vez. Clique no botão
              correspondente à ação que deseja realizar.
            </MessageBar>
          )}
          {(inTurn.phase === "putting game on the table - need to discard" ||
            inTurn.phase === "putting game on the table - pass turn") && (
            <MessageBar>
              Baixe seu(s) jogo(s) e logo apos Clique "Terminei de baixar
              jogos".
            </MessageBar>
          )}
          {gotMorto && <MessageBar>Você pegou o Morto!!!</MessageBar>}
          {isErrorCannotFinishGame && (
            <MessageBar>
              Você ainda não tem canastra para finalizar o jogo. A vez agora é
              do adversário
            </MessageBar>
          )}
        </>
      )}
    </Toolbar>
  );
};

export default UserToolbar;
