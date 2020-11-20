import React, { useContext } from "react";
import GameContext from "../../context/GameContext/GameContext";

interface IDeckProps {
  handleGetFromDeckClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Deck: React.FC<IDeckProps> = ({ handleGetFromDeckClick }) => {
  const { inTurn } = useContext(GameContext);

  return (
    <div>
      <h3>Monte</h3>
      <button
        data-user={inTurn.user}
        disabled={inTurn.phase === "need to discard"}
        onClick={handleGetFromDeckClick}
      >
        Pegar do monte
      </button>
    </div>
  );
};

export default Deck;
