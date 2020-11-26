import React, { useContext } from "react";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";

interface IContextMenuProps {
  cardKey: number;

  // contextMenuTop: number;
  // contextMenuLeft: number;

  handleActivatePutOnTableModeClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleGetFromDiscardedClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const ContextMenu: React.FC<IContextMenuProps> = ({
  cardKey,

  // contextMenuTop,
  // contextMenuLeft,

  handleActivatePutOnTableModeClick,
  handleGetFromDiscardedClick,
}) => {
  const { inTurn } = useContext(GameContext);
  const socket = useContext(SocketContext);

  const handleDiscardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    socket.emit("discard", inTurn.user);
  };

  return (
    <div
      className="context-menu"
      // style={{ top: contextMenuTop, left: contextMenuLeft }}
    >
      <ul>
        <li>
          <button
            data-user={inTurn.user}
            data-card-key={cardKey}
            onClick={handleDiscardClick}
          >
            Descartar
          </button>
        </li>
        <li>
          <button
            data-user={inTurn.user}
            data-card-key={cardKey}
            onClick={handleActivatePutOnTableModeClick}
          >
            Descer jogo
          </button>
        </li>
      </ul>

      {/* {isTable && (
      <ul>
        <li>
          <button
            data-user={currentUser}
            data-card-key={currentCardKey}
            onClick={handleGetFromDiscardedClick}
          >
            Pegar da mesa
          </button>
        </li>
      </ul>
    )} */}
    </div>
  );
};

export default ContextMenu;
