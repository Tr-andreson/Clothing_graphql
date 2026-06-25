import { WebSocketServer } from "ws"
import { Server } from "http";
import { logger } from "@/infrastructure/services/loggingService/winston.service";

export const WebSocketConnection = (server: Server) => {

  // logger.info("WEB SOCKET CONNECTION Success")
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
