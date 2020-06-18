import React from "react";
import { ICard } from "../../services/game";
import DragNDrop from "../DragNDrop/DragNDrop";

interface IUserCards {
  user: string;
  phase: string;
  inHand: Map<number, ICard>;
  currentUser: string;
  openContextMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  currentCardKey: number;
  handlePutOnTableClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlePassTurnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserCards: React.FC<IUserCards> = ({
  user,
  phase,
  inHand,
  currentUser,
  currentCardKey,
  openContextMenu,
  handlePutOnTableClick,
  handlePassTurnClick,
}) => (
  <div>
    <div style={{ marginBottom: "20px" }}>
      <h2 className={currentUser === user ? "in-turn" : "not-in-turn"}>
        {user === "user1" ? "Jogador 1" : "Jogador 2"} - Cartas
      </h2>
    </div>
    <DragNDrop data={inHand} user={user} openContextMenu={openContextMenu} />
    {phase === "pass turn" && currentUser === user && (
      <ul>
        <li>
          <button
            data-user={currentUser}
            data-card-key={currentCardKey}
            onClick={handlePutOnTableClick}
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

export default UserCards;
