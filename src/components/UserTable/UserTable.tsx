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
  margin-right: 15px;
`;
interface IUserTable {
  userType: string;
  onTheTable: { games: Map<number, ICard>[] };
  tableActive: boolean;
}

const UserTable: React.FC<IUserTable> = ({ userType, onTheTable }) => {
  const { games } = onTheTable;

  return (
    <div>
      <GamesList>
        {games.map((game: Map<number, ICard>, index: number) => (
          <GamesListItem key={index}>
            {[...game.entries()].map(([cardKey, card]) => (
              <Card
                key={cardKey}
                userType={userType}
                cardKey={cardKey}
                card={card}
                disableRule={false}
              />
            ))}
          </GamesListItem>
        ))}
      </GamesList>
    </div>
  );
};

export default UserTable;
