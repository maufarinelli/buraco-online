import React, { useState, useEffect } from "react";
import { ICard } from "../../services/game";
import { connect } from "react-redux";
import { IInTurnState } from "../../store/reducers/inTurn";

interface ICardProps {
  user: string;
  cardKey: number;
  card: ICard;
  openContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ICardStatePros {
  inTurn: IInTurnState;
}

const Card: React.FC<ICardProps & ICardStatePros> = ({
  user,
  cardKey,
  card,
  openContextMenu,
  inTurn,
}) => {
  const [currentUser, setCurrentUser] = useState(inTurn.user);

  useEffect(() => {
    setCurrentUser(inTurn.user);
  }, [inTurn.user]);

  return (
    <button
      data-user={user}
      data-card-key={cardKey}
      onClick={openContextMenu}
      disabled={inTurn.phase === "taking card" || currentUser !== user}
    >
      <img
        height="100"
        src={`./cards/${card.cardCode}.jpg`}
        alt={card.cardLabel}
      />
    </button>
  );
};

const mapStateToProps = (state: any) => {
  const { inTurn } = state;

  return {
    inTurn,
  };
};

export default connect(mapStateToProps)(Card);
