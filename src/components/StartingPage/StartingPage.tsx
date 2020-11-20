import React, { useContext, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import SocketContext from "../../context/SocketContext/SocketContext";

interface IState {
  nameUser1: string;
  nameUser2: string;
  user1: string;
  user2: string;
}

const initialState: IState = {
  nameUser1: "",
  nameUser2: "",
  user1: "",
  user2: "",
};
const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "setNameUser1":
      return { ...state, nameUser1: action.payload };
    case "setNameUser2":
      return { ...state, nameUser2: action.payload };
    case "setUser1":
      return { ...state, user1: action.payload };
    case "setUser2":
      return { ...state, user2: action.payload };

    default:
      return state;
  }
};

const StartingPage: React.FC = () => {
  const socket = useContext(SocketContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    socket.on("user1-logged", (data: any) => {
      dispatch({ type: "setUser1", payload: data });
    });

    socket.on("user2-logged", (data: any) => {
      dispatch({ type: "setUser2", payload: data });
    });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const user = event.currentTarget.dataset.user;
    const value = event.currentTarget.value;

    if (user === "user1") dispatch({ type: "setNameUser1", payload: value });
    if (user === "user2") dispatch({ type: "setNameUser2", payload: value });
  };

  const handleUserLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = event.currentTarget.dataset.user;
    let name;

    if (user === "user1") {
      name = state.nameUser1;
    }
    if (user === "user2") {
      name = state.nameUser2;
    }

    if (socket) socket.emit("user-login", { user, name });
  };

  const handleStartGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    socket.emit("handle-start-game");
  };

  return (
    <div>
      <h1>Comece um novo jogo.</h1>

      {!state.user1 ? (
        <form onSubmit={handleUserLogin} data-user="user1">
          <label htmlFor="">
            Nome :
            <input
              type="text"
              data-user="user1"
              onChange={handleInputChange}
              value={state.nameUser1}
            />
          </label>
          <button type="submit">Jogador 1</button>
        </form>
      ) : (
        <h2>Jogador 1 : {state.user1}</h2>
      )}

      {!state.user2 ? (
        <form onSubmit={handleUserLogin} data-user="user2">
          <label htmlFor="">
            Nome :
            <input
              type="text"
              data-user="user2"
              onChange={handleInputChange}
              value={state.nameUser2}
            />
          </label>
          <button type="submit">Jogador 2</button>
        </form>
      ) : (
        <h2>Jogador 2 : {state.user2}</h2>
      )}

      {state.user1 && state.user2 && (
        <button onClick={handleStartGame}>Começar</button>
      )}
    </div>
  );
};

export default StartingPage;
