import React, { useState, useEffect } from "react";
import { Stage, Container } from "@inlet/react-pixi";
import {
  removeFromDeck,
  addToHand,
  discard,
  addToDiscarded,
  changeUser,
  getFromDiscarded,
} from "../../store/actions";
import { connect } from "react-redux";
import { store } from "../../store/store";
import Header from "../Header/Header";
import Deck from "../Deck/Deck";
import Table from "../Table/Table";
import ContextMenu from "../ContextMenu/ContextMenu";
import UserCards from "../UserCards/UserCards";
import { TableWrapper } from "../styles";

const Board: React.FC<any> = ({
  user1,
  user2,
  inTurn,
  discarded,
  dispatchRemoveFromDeck,
  dispatchChangeUser,
  dispatchAddToHand,
  dispatchGetFromDiscarded,
  dispatchDiscard,
  dispatchPutOnTable,
}) => {
  const [isContextMenuOpen, toggleContextMenu] = useState(false);
  const [contextMenuTop, setContextMenuTop] = useState(0);
  const [contextMenuLeft, setContextMenuLeft] = useState(0);
  const [currentUser, setCurrentUser] = useState(inTurn.user);
  const [currentCardKey, setCurrentCardKey] = useState(-1);
  const [isTable, setTableContext] = useState(false);

  useEffect(() => {
    setCurrentUser(inTurn.user);
  }, [inTurn.user]);

  const handleGetFromDeckClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const user = event.currentTarget.dataset.user;
    const { deck } = store.getState();
    const deckKeys = [...deck.keys()];
    const randowKey = deckKeys[Math.floor(Math.random() * deck.size)];
    const card = deck.get(randowKey);

    dispatchAddToHand(user, { key: randowKey, value: card });
    dispatchRemoveFromDeck({ key: randowKey, value: card });
  };

  const handleGetFromDiscardedClick = () => {
    const { discarded } = store.getState();
    const card = discarded.get(currentCardKey);

    dispatchGetFromDiscarded(currentUser, { key: currentCardKey, value: card });
  };

  const handleDiscardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const user = event.currentTarget.dataset.user;
    const cardKey = parseInt(event.currentTarget.dataset.cardKey as string, 10);

    if ((user === "user1" || user === "user2") && cardKey) {
      const state = store.getState();
      const userHand = state[user].inHand;
      const card = userHand.get(cardKey);

      dispatchDiscard(user, { key: cardKey, value: card });
      dispatchChangeUser();
    }
  };

  const handlePutOnTableClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const user = event.currentTarget.dataset.user;
    dispatchPutOnTable();
  };

  const handlePassTurnClick = () => {
    dispatchChangeUser();
  };

  const openContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    const user = event.currentTarget.dataset.user;
    const cardKey = event.currentTarget.dataset.cardKey;
    const isTable = event.currentTarget.dataset.isTable;

    if (isTable) {
      setTableContext(true);
    } else {
      setTableContext(false);
    }

    if (user && cardKey) {
      const top = event.clientY + 20;
      const left = event.clientX + 30;

      setContextMenuTop(top);
      setContextMenuLeft(left);
      toggleContextMenu(true);
      event.stopPropagation();

      setCurrentCardKey(parseInt(cardKey, 10));
    }
  };

  const closeContextMenu = () => {
    if (isContextMenuOpen) {
      toggleContextMenu(false);
    }
  };

  return (
    <div
      style={{ height: "100vh", margin: "0 20px", overflowY: "hidden" }}
      onClick={closeContextMenu}
    >
      <Header user={inTurn.user} phase={inTurn.phase} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "calc(100% - 160px)",
        }}
      >
        <UserCards
          user="user1"
          phase={inTurn.phase}
          inHand={user1.inHand}
          currentUser={currentUser}
          currentCardKey={currentCardKey}
          openContextMenu={openContextMenu}
          handlePutOnTableClick={handlePutOnTableClick}
          handlePassTurnClick={handlePassTurnClick}
        />

        <TableWrapper>
          <Deck
            user={inTurn.user}
            phase={inTurn.phase}
            handleGetFromDeckClick={handleGetFromDeckClick}
          />

          <Table
            discarded={discarded}
            user={inTurn.user}
            openContextMenu={openContextMenu}
          />
        </TableWrapper>

        <UserCards
          user="user2"
          phase={inTurn.phase}
          inHand={user2.inHand}
          currentUser={currentUser}
          currentCardKey={currentCardKey}
          openContextMenu={openContextMenu}
          handlePutOnTableClick={handlePutOnTableClick}
          handlePassTurnClick={handlePassTurnClick}
        />
      </div>

      {/* <Stage options={{ backgroundColor: 0x076324 }}>
        <Container />
      </Stage> */}

      {isContextMenuOpen && (
        <ContextMenu
          currentUser={currentUser}
          currentCardKey={currentCardKey}
          contextMenuTop={contextMenuTop}
          contextMenuLeft={contextMenuLeft}
          isTable={isTable}
          handleDiscardClick={handleDiscardClick}
          handlePutOnTableClick={handlePutOnTableClick}
          handleGetFromDiscardedClick={handleGetFromDiscardedClick}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { deck, discarded, user1, user2, inTurn } = state;

  return {
    deck,
    discarded,
    user1,
    user2,
    inTurn,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  dispatchRemoveFromDeck: (item: any) => dispatch(removeFromDeck(item)),
  dispatchAddToHand: (user: string, card: { key: number; value: string }) =>
    dispatch(addToHand(user, card)),
  dispatchGetFromDiscarded: (
    user: string,
    card: { key: number; value: string }
  ) => {
    dispatch(getFromDiscarded(user, card));
  },
  dispatchChangeUser: () => dispatch(changeUser()),
  dispatchDiscard: (user: string, card: { key: number; value: string }) => {
    dispatch(discard(user, card));
    dispatch(addToDiscarded(card));
  },
  dispatchPutOnTable: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
