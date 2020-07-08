import React from "react";
import styled from "styled-components";

const GamesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const GamesListItem = styled.li`
  min-width: 250px;
  display: inline-block;
`;

const GameSpace = styled.div`
  height: 100px;
  border: 1px dotted #fff;
`;

const UserTable = () => {
  const games = [1];
  return (
    <div>
      <GamesList>
        {games.map((game) => (
          <GamesListItem>
            <GameSpace />
          </GamesListItem>
        ))}
      </GamesList>
    </div>
  );
};

export default UserTable;
