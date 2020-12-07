import React from "react";
import socketIOClient from "socket.io-client";

const SOCKET_ENDPOINT = "ws://127.0.0.1:8000/";

export const socket = socketIOClient(SOCKET_ENDPOINT, {
  transports: ["websocket"],
});

const SocketContext = React.createContext<SocketIOClient.Socket>(socket);

export default SocketContext;