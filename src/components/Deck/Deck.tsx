import React from "react";

interface IDeckProps {
  user: string;
  phase: string;
  handleGetFromDeckClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Deck: React.FC<IDeckProps> = ({
  user,
  phase,
  handleGetFromDeckClick,
}) => (
  <div>
    <h3>Monte</h3>
    <button
      data-user={user}
      disabled={phase === "need to discard"}
      onClick={handleGetFromDeckClick}
    >
      Pegar do monte
    </button>
  </div>
);

export default Deck;
