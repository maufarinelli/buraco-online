import React, { useState, useEffect, useContext } from "react";
import GameContext, {
  IInTurnState,
  IUserState,
} from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { ICard } from "../../services/game";
import ContextMenu from "../ContextMenu/ContextMenu";
import Deck from "../Deck/Deck";
import Header from "../Header/Header";
import { TableWrapper, UserTableWrapper } from "../styles";
import Table from "../Table/Table";
import UserCards from "../UserCards/UserCards";
import UserTable from "../UserTable/UserTable";
import { BoardWrapper, GameWrapper } from "./styles";

const Board: React.FC = () => {
  const [user, setUser] = useState<IUserState>();
  const [inTurn, setInTurn] = useState<IInTurnState>({
    user: "user1",
    phase: "taking card",
  });

  const socket = useContext(SocketContext);
  const context = { user, setUser, inTurn, setInTurn };

  useEffect(() => {
    socket.on("init-game", (data: string) => {
      const parsedData: { user: any; inTurn: IInTurnState } = JSON.parse(data);

      const parserInHand = JSON.parse(parsedData.user.inHand).reduce(
        (acc: Map<string, ICard>, current: any[]) => {
          acc.set(current[0], current[1]);
          return acc;
        },
        new Map<string, ICard>()
      );
      const parsedUser = {
        ...parsedData.user,
        inHand: parserInHand,
      };

      setUser(parsedUser);
      setInTurn(parsedData.inTurn);
    });
  }, []);

  const handleGetFromDeckClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {};

  // Render
  if (!user) return null;
  return (
    <GameContext.Provider value={context}>
      <BoardWrapper>
        <TableWrapper>
          <Deck handleGetFromDeckClick={handleGetFromDeckClick} />
        </TableWrapper>

        <UserCards
          user={user}
          tableActive={user.tableActive}
          currentUser={inTurn.user}
        />
      </BoardWrapper>
    </GameContext.Provider>
  );
};

export default Board;
