import React from "react";
import { ICard } from "../../services/game";
import "./card.css";

interface ICardProps {
  cardKey: number;
  card: ICard;
  handleCardClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disableRule: boolean;
  className?: string;
}

const Card: React.FC<ICardProps> = ({
  cardKey,
  card,
  handleCardClick,
  disableRule,
  className,
}) => {
  return (
    <>
      <button
        className={className}
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
