import React from "react";
import styled from "styled-components";
import { ICard } from "../../services/game";
import Card from "../Card/Card";

const GamesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const GamesListItem = styled.li`
  min-width: 250px;
  display: inline-block;
  height: 109px;
  border: 1px dotted #fff;
`;
interface IUserTable {
  user: string;
  onTheTable: { games: Map<number, ICard>[] };
  tableActive: boolean;
}

const UserTable: React.FC<IUserTable> = ({ user, onTheTable }) => {
  const { games } = onTheTable;

  return (
    <div>
      <GamesList>
        {games.map((game: Map<number, ICard>) => (
          <GamesListItem>
            {[...game.entries()].map(([cardKey, card]) => (
              <Card user={user} cardKey={cardKey} card={card} />
            ))}
          </GamesListItem>
        ))}
      </GamesList>
    </div>
  );
};

export default UserTable;
