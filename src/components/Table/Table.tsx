import React, { useContext } from "react";
import GameContext from "../../context/GameContext/GameContext";

const Table: React.FC = () => {
  const { user, discarded } = useContext(GameContext);

  const openContextMenu = () => {};

  return (
    <div>
      <h3>Mesa</h3>
      {[...discarded.entries()].map(([key, card]) => {
        return (
          <button
            key={key}
            data-is-table={true}
            data-user={user}
            data-card-key={key}
            onClick={openContextMenu}
          >
            <img
              height="100"
              src={`./cards/${card.cardCode}.jpg`}
              alt={card.cardLabel}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Table;
