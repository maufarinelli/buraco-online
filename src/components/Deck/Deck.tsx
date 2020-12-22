import React, { useContext } from "react";
import GameContext from "../../context/GameContext/GameContext";
import SocketContext from "../../context/SocketContext/SocketContext";
import { EVENTS } from "../../global/EVENTS";
import { Title } from "../styles";
import CardsDeck from "./CardsDeck";

const Deck: React.FC = () => {
  const socket = useContext(SocketContext);
  const { user, inTurn, deckSize } = useContext(GameContext);

  const handleGetFromDeckClick = () => {
    socket.emit(EVENTS.GET_CARD_FROM_DECK, user?.type);
  };

  return (
    <div>
      <Title>
        Monte <small>restam {deckSize} cartas</small>
      </Title>
      <button
        data-user={inTurn.user}
        disabled={user.type !== inTurn.user || inTurn.phase !== "taking card"}
        onClick={handleGetFromDeckClick}
      >
        Pegar do monte
      </button>
      <CardsDeck />
    </div>
  );
};

export default Deck;
