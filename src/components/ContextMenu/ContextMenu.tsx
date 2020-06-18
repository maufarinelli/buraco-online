import React from "react";

interface IContextMenuProps {
  currentUser: string;
  currentCardKey: number;

  contextMenuTop: number;
  contextMenuLeft: number;
  isTable: boolean;

  handleDiscardClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlePutOnTableClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGetFromDiscardedClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const ContextMenu: React.FC<IContextMenuProps> = ({
  currentUser,
  currentCardKey,

  contextMenuTop,
  contextMenuLeft,
  isTable,

  handleDiscardClick,
  handlePutOnTableClick,
  handleGetFromDiscardedClick,
}) => (
  <div
    className="context-menu"
    style={{ top: contextMenuTop, left: contextMenuLeft }}
  >
    {!isTable && (
      <ul>
        <li>
          <button
            data-user={currentUser}
            data-card-key={currentCardKey}
            onClick={handleDiscardClick}
          >
            Descartar
          </button>
        </li>
        <li>
          <button
            data-user={currentUser}
            data-card-key={currentCardKey}
            onClick={handlePutOnTableClick}
          >
            Descer jogo
          </button>
        </li>
      </ul>
    )}

    {isTable && (
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
    )}
  </div>
);

export default ContextMenu;
