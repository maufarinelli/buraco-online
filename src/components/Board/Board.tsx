import React, { useState, useEffect } from "react";
import {
  removeFromDeck,
  addToHand,
  discard,
  addToDiscarded,
  changeUser,
  getFromDiscarded,
  activatePutOnTable,
} from "../../store/actions";
import { connect } from "react-redux";
import { store } from "../../store/store";
import Header from "../Header/Header";
import Deck from "../Deck/Deck";
import Table from "../Table/Table";
import ContextMenu from "../ContextMenu/ContextMenu";
import UserCards from "../UserCards/UserCards";
import {
  TableWrapper,
  UserTableWrapper,
  UserTableActive,
  UserTableActiveClickable,
} from "../styles";
import { BoardWrapper, GameWrapper } from "./styles";
import UserTable from "../UserTable/UserTable";
import { ICard } from "../../services/game";
import { IUserState } from "../../store/reducers/users";

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
  dispatchActivatePutOnTableModeClick,
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
      const userHand = (state[user] as IUserState).inHand;
      const card = userHand.get(cardKey);

      dispatchDiscard(user, { key: cardKey, value: card });
      dispatchChangeUser();
    }
  };

  const handleActivatePutOnTableModeClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const user = event.currentTarget.dataset.user;

    dispatchActivatePutOnTableModeClick(user);
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
    <GameWrapper onClick={closeContextMenu}>
      <Header user={inTurn.user} phase={inTurn.phase} />

      <BoardWrapper>
        <UserCards
          user="user1"
          phase={inTurn.phase}
          inHand={user1.inHand}
          currentUser={currentUser}
          currentCardKey={currentCardKey}
          tableActive={user1.tableActive}
          openContextMenu={openContextMenu}
          handleActivatePutOnTableModeClick={handleActivatePutOnTableModeClick}
          handlePassTurnClick={handlePassTurnClick}
        />
        <UserTableWrapper>
          <p>Jogos do jogador 1.</p>
          <UserTable
            user="user1"
            onTheTable={user1.onTheTable}
            tableActive={user1.tableActive}
          />
        </UserTableWrapper>

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

        <UserTableWrapper>
          <p>Jogos do jogador 2</p>
          <UserTable
            user="user2"
            onTheTable={user2.onTheTable}
            tableActive={user2.tableActive}
          />
        </UserTableWrapper>

        <UserCards
          user="user2"
          phase={inTurn.phase}
          inHand={user2.inHand}
          tableActive={user2.tableActive}
          currentUser={currentUser}
          currentCardKey={currentCardKey}
          openContextMenu={openContextMenu}
          handleActivatePutOnTableModeClick={handleActivatePutOnTableModeClick}
          handlePassTurnClick={handlePassTurnClick}
        />
      </BoardWrapper>

      {isContextMenuOpen && (
        <ContextMenu
          currentUser={currentUser}
          currentCardKey={currentCardKey}
          contextMenuTop={contextMenuTop}
          contextMenuLeft={contextMenuLeft}
          isTable={isTable}
          handleDiscardClick={handleDiscardClick}
          handleActivatePutOnTableModeClick={handleActivatePutOnTableModeClick}
          handleGetFromDiscardedClick={handleGetFromDiscardedClick}
        />
      )}
    </GameWrapper>
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
  dispatchAddToHand: (user: string, card: { key: number; value: ICard }) =>
    dispatch(addToHand(user, card)),
  dispatchGetFromDiscarded: (
    user: string,
    card: { key: number; value: ICard }
  ) => {
    dispatch(getFromDiscarded(user, card));
  },
  dispatchChangeUser: () => dispatch(changeUser()),
  dispatchDiscard: (user: string, card: { key: number; value: ICard }) => {
    dispatch(discard(user, card));
    dispatch(addToDiscarded(card));
  },
  dispatchActivatePutOnTableModeClick: (user: string) => {
    dispatch(activatePutOnTable(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
