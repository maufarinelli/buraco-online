import React, { useState, useRef, useEffect, useContext } from "react";
import { ICard } from "../../services/game";
import Card from "../Card/Card";
import ActionsContext from "../../context/ActionsContext/ActionsContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import GameContext from "../../context/GameContext/GameContext";
import { EVENTS } from "../../global/EVENTS";

interface IUserDraggableCardsProps {
  data: Map<number, ICard>;
  userType: string;
  openContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserDraggableCards: React.FC<IUserDraggableCardsProps> = ({
  data,
  userType,
}) => {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const [dragItemNodeIndex, setDragItemNodeIndex] = useState(-1);
  const { isDiscardMode, setDiscardMode, discard } = useContext(ActionsContext);
  const socket = useContext(SocketContext);
  const { inTurn } = useContext(GameContext);

  useEffect(() => {
    setList(data);
  }, [data]);

  useEffect(() => {
    if (!dragging && list.size !== 0) {
      // After handleDragEnd, send the new list ordered
      socket.emit(EVENTS.CHANGE_CARDS_POSITION, {
        userType,
        cards: JSON.stringify(Array.from(list)),
      });
    }
  }, [dragging]);

  const dragItemNode = useRef(null);

  const handleDragStart = (
    event: React.MouseEvent<HTMLDivElement>,
    cardList: { cardIndex: number; list: Map<number, ICard> }
  ) => {
    const { cardIndex } = cardList;

    dragItemNode.current = event.target as any;
    (dragItemNode.current as any)?.addEventListener("dragend", handleDragEnd);
    setDragItemNodeIndex(cardIndex);

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (
    event: React.DragEvent<HTMLDivElement>,
    cardList: { dragEndCardIndex: number }
  ) => {
    const { dragEndCardIndex } = cardList;

    if (dragItemNode.current !== event.target) {
      setList((oldList) => {
        const newList = new Map<number, ICard>();
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

  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const cardKey = event.currentTarget.dataset.cardKey;

    if (isDiscardMode && cardKey) {
      discard(userType, parseInt(cardKey, 10), socket);
      setDiscardMode(false);
    }
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
              cardKey={cardKey}
              card={card}
              handleCardClick={handleCardClick}
              disableRule={
                inTurn.phase === "taking card" || inTurn.user !== userType
              }
              className={isDiscardMode ? "is-discard-mode" : ""}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default UserDraggableCards;
