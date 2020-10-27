import React, { useState, useRef } from "react";
import { ICard } from "../../services/game";
import Card from "../Card/Card";

interface IUserDraggableTablePros {
  data: Map<number, ICard>;
  user: string;
}

const UserDraggableTable: React.FC<IUserDraggableTablePros> = ({
  data,
  user,
}) => {
  const [dragging, setDragging] = useState(false);
  const [list, setList] = useState(data);
  const dragItemNode = useRef(null);

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
            <Card user={user} cardKey={cardKey} card={card} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default UserDraggableTable;
