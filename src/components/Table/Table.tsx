import React, { useContext } from "react";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { handleGetFromDiscarded } from "../../handlers/discarded";
import Card from "../Card/Card";

const Table: React.FC = () => {
  const { user, discarded, inTurn } = useContext(GameContext);
  const socket = useContext(SocketContext);

  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const cardKey = event.currentTarget.dataset.cardKey;

    if (cardKey) {
      handleGetFromDiscarded(user.type, parseInt(cardKey, 10), socket);
    }
  };

  return (
    <div>
      <h3>Mesa</h3>
      {[...discarded.entries()].map(([cardKey, card]) => {
        return (
          <Card
            userType={user.type}
            cardKey={cardKey}
            card={card}
            handleCardClick={handleCardClick}
            disableRule={
              inTurn.user !== user.type || inTurn.phase !== "taking card"
            }
          />
        );
      })}
    </div>
  );
};

export default Table;
