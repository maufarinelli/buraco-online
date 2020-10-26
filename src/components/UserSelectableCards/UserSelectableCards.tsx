import React from "react";
import { connect, MapDispatchToPropsFunction } from "react-redux";
import { Action, Dispatch } from "redux";
import { ICard, validateGame } from "../../services/game";
import { addNewGame, changeUser } from "../../store/actions";
import SelectableCard from "../Card/SelectableCard";
import { UserTableActive, UserTableActiveClickable } from "../styles";

interface IUserSelectableCardsProps {
  inHand: Map<number, ICard>;
  user: string;
}

interface IUserSelectableCardsStateDispatchers {
  dispatchAddNewGame: (user: string, cards: Map<number, ICard>) => void;
  dispatchChangeUser: () => void;
}

const UserSelectableCards: React.FC<
  IUserSelectableCardsProps & IUserSelectableCardsStateDispatchers
> = ({ inHand, user, dispatchAddNewGame, dispatchChangeUser }) => {
  const selectedList = new Map<number, ICard>();

  const handleSelectedCards = (cardKey: number, isChecked: boolean) => {
    const currentCard = inHand.get(cardKey);

    if (currentCard) {
      if (isChecked) {
        selectedList.set(cardKey, currentCard);
      } else {
        selectedList.delete(cardKey);
      }
    }

    console.log("selectedList : ", selectedList);
  };

  const handleAddNewGame = () => {
    if (validateGame(selectedList)) {
      dispatchAddNewGame(user, selectedList);
    } else {
      console.log("Game not Valid");
    }
  };

  const handlePassTurnClick = () => {
    dispatchChangeUser();
  };

  return (
    <div>
      {[...inHand.entries()].map(([cardKey, card]) => (
        <SelectableCard
          user={user}
          cardKey={cardKey}
          card={card}
          handleSelectedCards={handleSelectedCards}
        />
      ))}
      <UserTableActive>
        <span>"Descendo jogo!" </span>
        <UserTableActiveClickable onClick={handleAddNewGame}>
          Clique aqui
        </UserTableActiveClickable>
        para adicionar um novo jogo. Quando acabar,
        <UserTableActiveClickable onClick={handlePassTurnClick}>
          clique aqui
        </UserTableActiveClickable>
        para passar a vez
      </UserTableActive>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToPropsFunction<any, any> = (
  dispatch: Dispatch<Action>,
  ownProps: any = null
) => ({
  dispatchAddNewGame: (user: string, cards: Map<number, ICard>) => {
    dispatch(addNewGame(user, cards));
  },
  dispatchChangeUser: () => dispatch(changeUser()),
});

export default connect(null, mapDispatchToProps)(UserSelectableCards);
