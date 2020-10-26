import React, { useState, useEffect } from "react";
import { ICard } from "../../services/game";
import { connect } from "react-redux";
import { IInTurnState } from "../../store/reducers/inTurn";

interface ICardProps {
  user: string;
  cardKey: number;
  card: ICard;
  handleSelectedCards: (cardKey: number, isChecked: boolean) => void;
}

interface ICardStatePros {
  inTurn: IInTurnState;
}

const SelectableCard: React.FC<ICardProps & ICardStatePros> = ({
  user,
  cardKey,
  card,
  inTurn,
  handleSelectedCards,
}) => {
  const [currentUser, setCurrentUser] = useState(inTurn.user);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setCurrentUser(inTurn.user);
  }, [inTurn.user]);

  const handleInputChange = () => {
    setChecked((currentState) => !currentState);
    handleSelectedCards(cardKey, !isChecked);
  };

  return (
    <label htmlFor={cardKey.toString()}>
      <img
        height="100"
        src={`./cards/${card.cardCode}.jpg`}
        alt={card.cardLabel}
      />
      <input
        type="checkbox"
        id={cardKey.toString()}
        checked={isChecked}
        onChange={handleInputChange}
      />
    </label>
  );
};

const mapStateToProps = (state: any) => {
  const { inTurn } = state;

  return {
    inTurn,
  };
};

export default connect(mapStateToProps)(SelectableCard);
