import React, { useContext } from "react";
import styled from "styled-components";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { handleGetFromDiscarded } from "../../handlers/discarded";
import Card from "../Card/Card";

const TableHeader = styled.div`
  display: flex;

  p {
    margin-left: 10px;
    margin-top: 1.4em;
  }
`;

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
      <TableHeader>
        <h3>Mesa</h3>
        <p>Basta clicar numa carta para pega-la da mesa.</p>
      </TableHeader>

      {[...discarded.entries()].map(([cardKey, card]) => {
        return (
          <Card
            cardKey={cardKey}
            card={card}
            handleCardClick={handleCardClick}
            disableRule={
              inTurn.user !== user.type || inTurn.phase !== "taking card"
            }
            className="is-table-card"
          />
        );
      })}
    </div>
  );
};

export default Table;
