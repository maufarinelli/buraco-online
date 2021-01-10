import React from "react";
import socketIOClient from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const screenId = uuidv4();

const backendUrl =
  process.env.NODE_ENV === "development"
    ? "ws://127.0.0.1:8000"
    : "wss://buraco-online-be.herokuapp.com";

const SOCKET_ENDPOINT = `${backendUrl}/?screenId=${screenId}`;

export const socket = socketIOClient(SOCKET_ENDPOINT, {
  transports: ["websocket"],
});

const SocketContext = React.createContext<SocketIOClient.Socket>(socket);

export default SocketContext;
