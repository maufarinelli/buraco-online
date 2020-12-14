import React, { useContext } from "react";
import GameContext from "../../context/GameContext/GameContext";
import { Title } from "../styles";

interface IDeckProps {
  handleGetFromDeckClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Deck: React.FC<IDeckProps> = ({ handleGetFromDeckClick }) => {
  const { user, inTurn } = useContext(GameContext);

  return (
    <div>
      <Title>Monte</Title>
      <button
        data-user={inTurn.user}
        disabled={user.type !== inTurn.user || inTurn.phase !== "taking card"}
        onClick={handleGetFromDeckClick}
      >
        Pegar do monte
      </button>
    </div>
  );
};

export default Deck;
