import "reflect-metadata"
import dotenv from "dotenv"
import http from "node:http"
import app from "./appConfig"
import { WebSocketConnection } from "./presentation/api/websocket"
// import { logger } from "./infrastructure/services/loggingService/winston.service"

dotenv.config()

// ---------------- DRIVER CODE -----------------
const main = () => {
  const server = http.createServer(app)
  // --------------- WEB SOCKET CONNECTION --------
  WebSocketConnection(server)

  server.listen(process.env.PORT, () => {
		let message = `Server Running at PORT ${process.env.PORT || 9000}`
		// logger.info(message);
    // logger.info(`Server Running to PORT ${process.env.PORT || 9000}`)
		console.log(message);
  })
}

main()

