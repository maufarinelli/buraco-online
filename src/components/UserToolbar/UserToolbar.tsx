import React, { useContext } from "react";
import styled from "styled-components";
import ActionsContext, {
  discard,
} from "../../context/ActionsContext/ActionsContext";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";

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
  padding: 5px 10px;
  background-color: black;
  display: inline-block;
  font-size: 20px;
  line-height: 1.2;
`;

const UserToolbar = () => {
  const { user, inTurn } = useContext(GameContext);
  const { isDiscardMode, setDiscardMode } = useContext(ActionsContext);

  const handleDiscardButtonClick = () => {
    setDiscardMode(true);
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
                inTurn.user !== user.type || inTurn.phase !== "need to discard"
              }
              onClick={handleDiscardButtonClick}
            >
              Descartar
            </button>
          </ToolbarListItem>
          <ToolbarListItem>
            <button
              disabled={
                inTurn.user !== user.type || inTurn.phase !== "need to discard"
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
            >
              Passar a vez
            </button>
          </ToolbarListItem>
        </ToolbarList>
      </nav>
      <ToolbarText>
        {isDiscardMode && "Clique na carta que voce quer descartar"}
      </ToolbarText>
    </Toolbar>
  );
};

export default UserToolbar;
