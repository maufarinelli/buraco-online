import React, { useState, useRef, useEffect, ReactNode } from "react";
import { ICard } from "../../services/game";
import Card from "../Card/Card";

interface IDragNDropPros {
  data: Map<number, ICard>;
  user: string;
  openContextMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// @ts-ignore
Array.prototype.swapItems = function (a: any, b: any) {
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
};

const DragNDrop: React.FC<IDragNDropPros> = ({
  data,
  user,
  openContextMenu,
}) => {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const [dragItemNodeIndex, setDragItemNodeIndex] = useState(-1);

  useEffect(() => {
    setList(data);
  }, [setList, data]);

  //   const dragItem = useRef(null);
  const dragItemNode = useRef(null);

  const handleDragStart = (
    event: React.MouseEvent<HTMLDivElement>,
    cardList: { cardIndex: number; list: Map<number, ICard> }
  ) => {
    const { cardIndex, list } = cardList;

    dragItemNode.current = event.target as any;
    (dragItemNode.current as any)?.addEventListener("dragend", handleDragEnd);
    setDragItemNodeIndex(cardIndex);

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (
    event: React.MouseEvent<HTMLDivElement>,
    cardList: { dragEndCardIndex: number }
  ) => {
    const { dragEndCardIndex } = cardList;

    if (dragItemNode.current !== event.target) {
      setList((oldList) => {
        const newList = new Map();
        const newListCards = [...oldList.entries()];

        // @ts-ignore
        newListCards.swapItems(dragItemNodeIndex, dragEndCardIndex);
        setDragItemNodeIndex(dragEndCardIndex);

        newListCards.map((item) => {
          newList.set(item[0], item[1]);
        });

        return new Map(newList);
      });
    }
  };
  const handleDragEnd = () => {
    setDragging(false);
    setDragItemNodeIndex(-1);
  };

  if (list) {
    return (
      <div className="drag-n-drop">
        {[...list.entries()].map(([cardKey, card], cardIndex) => (
          <div
            ref={dragItemNode}
            draggable
            key={cardKey}
            onDragStart={(e) => handleDragStart(e, { cardIndex, list })}
            onDragEnter={
              dragging
                ? (e) => {
                    handleDragEnter(e, { dragEndCardIndex: cardIndex });
                  }
                : undefined
            }
          >
            <Card
              user={user}
              cardKey={cardKey}
              card={card}
              openContextMenu={openContextMenu}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default DragNDrop;
