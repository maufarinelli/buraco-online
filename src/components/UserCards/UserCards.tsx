import React, { useContext } from "react";
import { ICard } from "../../services/game";
import UserDraggableCards from "./UserDraggableCards";
import UserSelectableCards from "../UserSelectableCards/UserSelectableCards";
import GameContext, { IUserState } from "../../context/GameContext/GameContext";

interface IUserCards {
  openContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  currentCardKey?: number;
  handleActivatePutOnTableModeClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handlePassTurnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserCards: React.FC<IUserCards> = ({
  currentCardKey,
  openContextMenu,
  handleActivatePutOnTableModeClick,
  handlePassTurnClick,
}) => {
  const { user, inTurn } = useContext(GameContext);

  return (
    <div>
      {user.tableActive ? (
        <UserSelectableCards inHand={user.inHand} user={user} />
      ) : (
        <UserDraggableCards
          data={user.inHand}
          userType={user.type}
          openContextMenu={openContextMenu}
        />
      )}

      {/* {inTurn.phase === "pass turn" && inTurn.user === user.type && (
        <ul>
          <li>
            <button
              data-user={inTurn.user}
              data-card-key={currentCardKey}
              onClick={handleActivatePutOnTableModeClick}
            >
              Descer jogo
            </button>
          </li>
          <li>
            <button onClick={handlePassTurnClick}>Passar a vez</button>
          </li>
        </ul>
      )} */}
    </div>
  );
};

export default UserCards;
