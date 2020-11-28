import React, { useState, useRef, useContext } from "react";
import GameContext from "../../context/GameContext/GameContext";
import { ICard } from "../../services/game";
import Card from "../Card/Card";

interface IUserDraggableTablePros {
  data: Map<number, ICard>;
  userType: string;
}

const UserDraggableTable: React.FC<IUserDraggableTablePros> = ({
  data,
  userType,
}) => {
  const [dragging, setDragging] = useState(false);
  const [list, setList] = useState(data);
  const dragItemNode = useRef(null);
  const { inTurn } = useContext(GameContext);

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);

    dragItemNode.current = event.target as any;
    (dragItemNode.current as any)?.addEventListener("dragend", handleDragEnd);
  };

  const handleDragEnter = (
    event: React.MouseEvent<HTMLDivElement>,
    cardKey: number,
    card: ICard
  ) => {
    setList((oldList) => {
      const newList = new Map(oldList);
      newList.set(cardKey, card);

      return newList;
    });
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  if (list) {
    return (
      <div className="drag-n-drop">
        {[...list.entries()].map(([cardKey, card], cardIndex) => (
          <div
            ref={dragItemNode}
            draggable
            key={cardKey}
            onDragStart={(e) => handleDragStart(e)}
            onDragEnter={
              dragging
                ? (e) => {
                    handleDragEnter(e, cardKey, card);
                  }
                : undefined
            }
          >
            <Card
              userType={userType}
              cardKey={cardKey}
              card={card}
              disableRule={
                inTurn.phase === "taking card" || inTurn.user !== userType
              }
            />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default UserDraggableTable;
