import React, { useState, useEffect, useContext } from "react";
import GameContext from "../../context/GameContext/GameContext";
import { ICard } from "../../services/game";
import { IInTurnState } from "../../store/reducers/inTurn";

interface ICardProps {
  user: string;
  cardKey: number;
  card: ICard;
  openContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card: React.FC<ICardProps> = ({
  user,
  cardKey,
  card,
  openContextMenu,
}) => {
  const { inTurn } = useContext(GameContext);

  return (
    <button
      data-user={user}
      data-card-key={cardKey}
      onClick={openContextMenu}
      disabled={inTurn.phase === "taking card" || inTurn.user !== user}
    >
      <img
        height="100"
        src={`./cards/${card.cardCode}.jpg`}
        alt={card.cardLabel}
      />
    </button>
  );
};

export default Card;
