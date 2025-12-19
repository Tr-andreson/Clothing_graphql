import "reflect-metadata"
import dotenv from "dotenv"
import http from "node:http"
import app from "./appConfig"
import { WebSocketConnection } from "./presentation/api/websocket"

dotenv.config()

// ---------------- DRIVER CODE -----------------
const main = () => {
  const server = http.createServer(app)
  // --------------- WEB SOCKET CONNECTION --------
  WebSocketConnection(server)

  server.listen(process.env.PORT || 8000, () => {
    console.log(`server listing to port ${process.env.PORT || 8000}`)
  })
}

main()

