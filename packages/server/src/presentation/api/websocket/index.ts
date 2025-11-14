import { WebSocketServer } from "ws"

export const WebSockerConnection = (server: any) => {
  const wss = new WebSocketServer({ server });
  wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    console.log(ip, "ip debug");
    ws.on('error', console.error);
    ws.send('Web sokcer connected succesfully');
  });

}
