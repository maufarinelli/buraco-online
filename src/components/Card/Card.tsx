import React, { useContext } from "react";
import ActionsContext from "../../context/ActionsContext/ActionsContext";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { ICard } from "../../services/game";
import "./card.css";

interface ICardProps {
  userType: string;
  cardKey: number;
  card: ICard;
  handleCardClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disableRule: boolean;
}

const Card: React.FC<ICardProps> = ({
  userType,
  cardKey,
  card,
  handleCardClick,
  disableRule,
}) => {
  const { isDiscardMode } = useContext(ActionsContext);

  return (
    <>
      <button
        className={isDiscardMode ? "is-discard-mode" : ""}
        data-card-key={cardKey}
        onClick={handleCardClick}
        disabled={disableRule}
      >
        <img
          height="100"
          src={`./cards/${card.cardCode}.jpg`}
          alt={card.cardLabel}
        />
      </button>
    </>
  );
};

export default Card;
