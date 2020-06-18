import React from "react";
import { ICard } from "../../services/game";

interface ITableProps {
  discarded: Map<number, ICard>;
  user: string;
  openContextMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Table: React.FC<ITableProps> = ({ discarded, user, openContextMenu }) => (
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

export default Table;
