import React, { useContext, useEffect, useState } from "react";
import ActionsContext from "../../context/ActionsContext/ActionsContext";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { EVENTS } from "../../global/EVENTS";
import { ICard } from "../../services/game";
import Card from "../Card/Card";

interface IUserCards {
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    cardIndex: number,
    cardKey: number
  ) => void;
  dragging: boolean;
  dragItemNodeIndex: number;
  setDragItemNodeIndex: React.Dispatch<React.SetStateAction<number>>;
}

const UserCards: React.FC<IUserCards> = ({
  handleDragStart,
  dragging,
  dragItemNodeIndex,
  setDragItemNodeIndex,
}) => {
  const socket = useContext(SocketContext);
  const { user, inTurn } = useContext(GameContext);
  const {
    isDiscardMode,
    setDiscardMode,
    discard,
    isPutOnTableMode,
  } = useContext(ActionsContext);
  const [list, setList] = useState(user.inHand);

  useEffect(() => {
    setList(user.inHand);
  }, [user.inHand]);

  useEffect(() => {
    if (!dragging && list.size !== 0 && !isPutOnTableMode) {
      // After handleDragEnd, send the new list ordered
      socket.emit(EVENTS.CHANGE_CARDS_POSITION, {
        userType: user.type,
        cards: JSON.stringify(Array.from(list)),
      });
    }
  }, [dragging]);

  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const cardKey = event.currentTarget.dataset.cardKey;

    if (isDiscardMode && cardKey) {
      discard(user.type, parseInt(cardKey, 10), socket);
      setDiscardMode(false);
    }
  };

  const handleDragEnter = (
    event: React.DragEvent<HTMLDivElement>,
    cardIndex: number
  ) => {
    // if (dragItemNode.current !== event.target) {
    setList((oldList) => {
      const newList = new Map<number, ICard>();
      const newListCards = [...oldList.entries()];

      // @ts-ignore
      newListCards.swapItems(dragItemNodeIndex, cardIndex);
      setDragItemNodeIndex(cardIndex);

      newListCards.map((item) => {
        newList.set(item[0], item[1]);
      });

      return new Map(newList);
    });
    // }
  };

  if (!list) return null;
  return (
    <div className="drag-n-drop">
      {[...list.entries()].map(([cardKey, card], cardIndex) => (
        <div
          draggable
          key={cardKey}
          onDragStart={(e) => handleDragStart(e, cardIndex, cardKey)}
          onDragEnter={(e) => handleDragEnter(e, cardIndex)}
        >
          <Card
            cardKey={cardKey}
            card={card}
            handleCardClick={handleCardClick}
            disableRule={
              inTurn.phase === "taking card" || inTurn.user !== user.type
            }
            className={isDiscardMode ? "is-discard-mode" : ""}
          />
        </div>
      ))}
    </div>
  );
};

export default UserCards;
