import React, { useState, useRef, useEffect } from "react";
import { ICard } from "../../services/game";
import Card from "../Card/Card";
import { changeCardsPositionInHand } from "../../store/actions";
import { connect } from "react-redux";

interface IUserDraggableCardsProps {
  data: Map<number, ICard>;
  userType: string;
  openContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IUserDraggableCardsState {
  dispatchChangeCardsPositionInHand: (
    user: string,
    cards: Map<number, ICard>
  ) => void;
}

const UserDraggableCards: React.FC<
  IUserDraggableCardsProps & IUserDraggableCardsState
> = ({
  data,
  userType,
  openContextMenu,
  dispatchChangeCardsPositionInHand,
}) => {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const [dragItemNodeIndex, setDragItemNodeIndex] = useState(-1);

  useEffect(() => {
    setList(data);
  }, [setList, data]);

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
    event: React.DragEvent<HTMLDivElement>,
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

        const newListCardsMap = new Map(newList);

        dispatchChangeCardsPositionInHand(userType, newListCardsMap);
        return newListCardsMap;
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
              userType={userType}
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

const mapDispatchToProps = (dispatch: any) => ({
  dispatchChangeCardsPositionInHand: (
    user: string,
    cards: Map<number, ICard>
  ) => dispatch(changeCardsPositionInHand(user, cards)),
});

export default connect(null, mapDispatchToProps)(UserDraggableCards);
