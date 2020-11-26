import React, { useContext } from "react";
import styled from "styled-components";
import GameContext from "../../context/GameContext/GameContext";

const HeaderTitle = styled.h1`
  display: inline-block;
  margin: 10px;
`;
const HeaderText = styled.p`
  padding: 5px 10px;
  background-color: black;
  display: inline-block;
  font-size: 20px;
  line-height: 1.2;
`;

const Header: React.FC = () => {
  const { inTurn } = useContext(GameContext);

  return (
    <div>
      <HeaderTitle>Buraco Online</HeaderTitle>
      <HeaderText>
        É a vez do: <b>{inTurn.user}</b>.{" "}
        {inTurn.phase === "taking card"
          ? "Pegue uma carta do monte ou da mesa."
          : "Você pode descer um jogo agora ou apenas descartar."}
      </HeaderText>
    </div>
  );
};

export default Header;
