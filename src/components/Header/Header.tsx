import React, { useContext } from "react";
import styled from "styled-components";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { EVENTS } from "../../global/EVENTS";
import MessageBar from "../MessageBar/MessageBar";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  display: inline-block;
  margin: 10px;
`;

const LougOutButton = styled.button`
  height: 30px;
`;

const Header: React.FC = () => {
  const { inTurn, winner } = useContext(GameContext);
  const socket = useContext(SocketContext);

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    socket.emit(EVENTS.USER_LOGOUT);
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>Buraco Online</HeaderTitle>
      {winner ? (
        <MessageBar>
          {winner === "user1" ? inTurn.user1Name : inTurn.user2Name} BATEU. FIM
          DO JOGO!{" "}
        </MessageBar>
      ) : (
        <MessageBar>
          É a vez de:{" "}
          <b>{inTurn.user === "user1" ? inTurn.user1Name : inTurn.user2Name}</b>
          .{" "}
          {inTurn.phase === "taking card"
            ? "Pegue uma carta do monte ou da mesa."
            : "Você pode descer um jogo agora ou apenas descartar."}
        </MessageBar>
      )}
      <LougOutButton onClick={handleLogout}>Sair do jogo</LougOutButton>
    </HeaderWrapper>
  );
};

export default Header;
