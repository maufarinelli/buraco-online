import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import "./services/game";
import StartingPage from "./components/StartingPage/StartingPage";
import SocketContext from "./context/SocketContext/SocketContext";

// @ts-ignore
Array.prototype.swapItems = function (a: any, b: any) {
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
};

const App: React.FC = () => {
  const socket = useContext(SocketContext);
  const [isUsersReady, setUsersToStart] = useState(false);

  useEffect(() => {
    socket.on("users-ready-to-start", () => {
      setUsersToStart(true);
    });

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = () => {
    if (
      window.confirm(
        "Você vai desconectar do jogo e não poderá voltar a mesma partida se desconectar. Você quer continuar?"
      )
    ) {
      if (socket) socket.emit("logout");
    }
  };

  if (isUsersReady) return <Board />;

  return <StartingPage />;
};

export default App;
