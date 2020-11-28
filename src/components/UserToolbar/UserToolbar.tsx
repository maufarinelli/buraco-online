import React, { useContext } from "react";
import styled from "styled-components";
import ActionsContext, {
  discard,
} from "../../context/ActionsContext/ActionsContext";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { EVENTS } from "../../global/EVENTS";

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

const ToolbarText = styled.p`
  margin-top: 15px;
  margin-left: 20px;
  padding: 5px 10px;
  background-color: black;
  display: inline-block;
  font-size: 20px;
  line-height: 1.2;
`;

const UserToolbar = () => {
  const { user, inTurn } = useContext(GameContext);
  const { isDiscardMode, setDiscardMode } = useContext(ActionsContext);
  const socket = useContext(SocketContext);

  const handleDiscardButtonClick = () => {
    setDiscardMode(true);
  };

  const handlePassTurnClick = () => {
    socket.emit(EVENTS.PASS_TURN);
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
        </ToolbarList>
      </nav>
      {inTurn.phase === "need to discard" && !isDiscardMode && (
        <ToolbarText>
          Você precisa descartar ou pode baixar jogos. Clique no botão
          correspondente à ação que deseja realizar.
        </ToolbarText>
      )}
      {inTurn.phase === "need to discard" && isDiscardMode && (
        <ToolbarText>Clique na carta que você quer descartar.</ToolbarText>
      )}
      {inTurn.phase === "pass turn" && (
        <ToolbarText>
          Você pode baixar jogos ou apenas passar a vez. Clique no botão
          correspondente à ação que deseja realizar.
        </ToolbarText>
      )}
    </Toolbar>
  );
};

export default UserToolbar;
