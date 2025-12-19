import { WebSocketServer } from "ws"
import { Server } from "http";

export const WebSocketConnection = (server: Server) => {
  console.log("web socket conenction working")
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    console.log(ip, "ip debug");

    ws.on('error', console.error);

    ws.on('open', function open() {
      ws.send('something');
    });

    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });

    ws.send('Websocket connected successfully');
  });
};
