import React, { useContext, useState } from "react";
import styled from "styled-components";
import GameContext from "../../context/GameContext/GameContext";
import MessageBar from "../MessageBar/MessageBar";
import UserCards from "../UserCards/UserCards";
import UserTableCards from "../UserCards/UserTableCards";

const UserTable = styled.div`
  min-width: 200px;
  min-height: 80px;
  border: 1px solid #fff;
  border-radius: 15px;
`;

const UserDraggableTable: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const [dragItemNodeIndex, setDragItemNodeIndex] = useState(-1);
  const { isErrorPutCardOnTable } = useContext(GameContext);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    cardIndex: number,
    cardKey: number
  ) => {
    setDragging(true);
    setDragItemNodeIndex(cardIndex);
    event.dataTransfer.setData("cardKey", cardKey.toString());
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    setDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <UserTable onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <UserTableCards />
      {isErrorPutCardOnTable && (
        <MessageBar>Esta carta não pode fazer parte desse jogo.</MessageBar>
      )}
      <UserCards
        handleDragStart={handleDragStart}
        dragging={dragging}
        dragItemNodeIndex={dragItemNodeIndex}
        setDragItemNodeIndex={setDragItemNodeIndex}
      />
    </UserTable>
  );
};

export default UserDraggableTable;
