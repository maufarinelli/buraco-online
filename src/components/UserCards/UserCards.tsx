import React, { useContext } from "react";
import { ICard } from "../../services/game";
import UserDraggableCards from "./UserDraggableCards";
import UserSelectableCards from "../UserSelectableCards/UserSelectableCards";
import GameContext, { IUserState } from "../../context/GameContext/GameContext";

interface IUserCards {
  user: IUserState;
  currentUser: string;
  tableActive: boolean;
  openContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  currentCardKey?: number;
  handleActivatePutOnTableModeClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handlePassTurnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserCards: React.FC<IUserCards> = ({
  user,
  currentCardKey,
  tableActive,
  openContextMenu,
  handleActivatePutOnTableModeClick,
  handlePassTurnClick,
}) => {
  const { inTurn } = useContext(GameContext);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h2 className={inTurn.user === user.type ? "in-turn" : "not-in-turn"}>
          {user.name} - Cartas
        </h2>
      </div>

      {tableActive ? (
        <UserSelectableCards inHand={user.inHand} user={user} />
      ) : (
        <UserDraggableCards
          data={user.inHand}
          userType={user.type}
          openContextMenu={openContextMenu}
        />
      )}

      {inTurn.phase === "pass turn" && inTurn.user === user.type && (
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
      )}
    </div>
  );
};

export default UserCards;
