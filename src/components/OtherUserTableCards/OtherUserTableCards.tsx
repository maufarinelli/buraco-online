import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import GameContext from "../../context/GameContext/GameContext";
import { ICard } from "../../services/game";
import Card from "../Card/Card";
import { Title } from "../styles";

const UserTable = styled.div`
  display: flex;
  min-height: 110px;
  margin: 10px 0;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 15px;
`;

const UserTableGame = styled.div`
  display: inline-block;
  min-width: 250px;
  min-height: 110px;
  margin: 10px 10px 5px 10px;
  border: "1px solid #fff";
`;

const UserTableCard = styled.div`
  display: inline-block;
  width: 42px;
`;

const OtherUserTableCards = () => {
  const { otherUser } = useContext(GameContext);

  return (
    <UserTable>
      <Title>Jogos do oponente</Title>
      {otherUser.onTheTable.map((game: Map<number, ICard>, index: number) => (
        <UserTableGame key={`user-table-game-${index}`}>
          <p>Jogo {index} </p>
          {[...game.entries()].map(([cardKey, card]) => (
            <UserTableCard draggable key={cardKey}>
              <Card cardKey={cardKey} card={card} disableRule={true} />
            </UserTableCard>
          ))}
        </UserTableGame>
      ))}
    </UserTable>
  );
};

export default OtherUserTableCards;
