import React, { useState, useEffect, useContext } from "react";
import ActionsContext from "../../context/ActionsContext/ActionsContext";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { ICard } from "../../services/game";
import { IInTurnState } from "../../store/reducers/inTurn";
import ContextMenu from "../ContextMenu/ContextMenu";

interface ICardProps {
  userType: string;
  cardKey: number;
  card: ICard;
  openContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card: React.FC<ICardProps> = ({ userType, cardKey, card }) => {
  const { inTurn } = useContext(GameContext);
  const { isDiscardMode, setDiscardMode, discard } = useContext(ActionsContext);
  const socket = useContext(SocketContext);
  // const [isContextMenuOpen, setContextMenuState] = useState(false);

  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const cardKey = event.currentTarget.dataset.cardKey;

    if (isDiscardMode && cardKey) {
      discard(userType, parseInt(cardKey, 10), socket);
      setDiscardMode(false);
    }
  };

  return (
    <>
      <button
        data-card-key={cardKey}
        onClick={handleCardClick}
        disabled={inTurn.phase === "taking card" || inTurn.user !== userType}
      >
        <img
          height="100"
          src={`./cards/${card.cardCode}.jpg`}
          alt={card.cardLabel}
        />
      </button>
      {/* {isContextMenuOpen && ( 
        // <ContextMenu
        //   cardKey={cardKey}
        //   handleActivatePutOnTableModeClick={handleActivatePutOnTableModeClick}
        //   handleGetFromDiscardedClick={handleGetFromDiscardedClick}
        // />
      {/*)}*/}
    </>
  );
};

export default Card;
