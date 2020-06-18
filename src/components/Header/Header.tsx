import React from "react";

interface IHeaderProps {
  user: string;
  phase: string;
}

const Header: React.FC<IHeaderProps> = ({ user, phase }) => (
  <div>
    <h1>Buraco Online</h1>
    <p>
      É a vez do: <b>{user}</b>.{" "}
      {phase === "taking card"
        ? "Pegue uma carta do monte ou da mesa."
        : "Você pode descer um jogo agora. Ou apenas descarte."}
    </p>
  </div>
);

export default Header;
