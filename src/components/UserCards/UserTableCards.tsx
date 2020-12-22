import React, { useContext, useState } from "react";
import styled from "styled-components";
import ActionsContext from "../../context/ActionsContext/ActionsContext";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { EVENTS } from "../../global/EVENTS";
import { ICard } from "../../services/game";
import Card from "../Card/Card";

const UserTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 110px;
`;

const UserTableGame = styled.div<{ isDraggingOver: boolean }>`
  min-width: 210px;
  min-height: 110px;
  margin: 10px 10px 5px 10px;
  padding-right: 42px;
  border: ${(props) =>
    props.isDraggingOver ? "1px solid #ffee00" : "1px solid #fff"};
  background-color: ${(props) =>
    props.isDraggingOver && "rgba(255, 255, 255, 0.2)"};
`;

const UserTableCard = styled.div`
  display: inline-block;
  width: 42px;
`;

const UserTableCards: React.FC = () => {
  const { inTurn, user } = useContext(GameContext);
  const { isPutOnTableMode } = useContext(ActionsContext);
  const [isDraggingOver, setDraggingOver] = useState(false);
  const socket = useContext(SocketContext);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    if (isPutOnTableMode) {
      setDraggingOver(true);
    }
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    setDraggingOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (isPutOnTableMode) {
      const cardKey = event.dataTransfer.getData("cardKey");
      const gameIndex = event.currentTarget.dataset.index;

      socket.emit(EVENTS.PUT_CARD_ON_TABLE, {
        userType: user.type,
        cardKey: parseInt(cardKey, 10),
        gameIndex,
      });

      setDraggingOver(false);
    }
  };

  return (
    <UserTable>
      <>
        {user.onTheTable.map((game: Map<number, ICard>, index: number) => (
          <UserTableGame
            data-index={index}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            isDraggingOver={isDraggingOver}
          >
            <p>Jogo {index + 1} </p>
            {[...game.entries()].map(([cardKey, card], cardIndex) => (
              <UserTableCard draggable key={cardKey}>
                <Card
                  cardKey={cardKey}
                  card={card}
                  disableRule={
                    inTurn.phase === "taking card" || inTurn.user !== user.type
                  }
                />
              </UserTableCard>
            ))}
          </UserTableGame>
        ))}

        <UserTableGame
          data-index={user.onTheTable.length}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          isDraggingOver={isDraggingOver}
        >
          <p>Novo jogo</p>
        </UserTableGame>
      </>
    </UserTable>
  );
};

export default UserTableCards;
