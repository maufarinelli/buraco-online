import React from "react";
import styled from "styled-components";
import { ICard } from "../../services/game";
import "./card.css";

interface ICardProps {
  cardKey: number;
  card: ICard;
  handleCardClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disableRule: boolean;
  className?: string;
}

const CardButton = styled.button`
  padding: 2px;
`;

const Card: React.FC<ICardProps> = ({
  cardKey,
  card,
  handleCardClick,
  disableRule,
  className,
}) => {
  return (
    <>
      <CardButton
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
      </CardButton>
    </>
  );
};

export default Card;
