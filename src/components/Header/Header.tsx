import React from "react";
import styled from "styled-components";

interface IHeaderProps {
  user: string;
  phase: string;
}

const HeaderTitle = styled.h1`
  display: inline-block;
  margin: 10px;
`;
const HeaderText = styled.p`
  display: inline-block;
`;

const Header: React.FC<IHeaderProps> = ({ user, phase }) => (
  <div>
    <HeaderTitle>Buraco Online</HeaderTitle>
    <HeaderText>
      É a vez do: <b>{user}</b>.{" "}
      {phase === "taking card"
        ? "Pegue uma carta do monte ou da mesa."
        : "Você pode descer um jogo agora. Ou apenas descarte."}
    </HeaderText>
  </div>
);

export default Header;
