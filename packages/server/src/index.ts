import "reflect-metadata"
import dotenv from "dotenv"
import http from "node:http"
import app from "./appConfig"
dotenv.config()


const main = () => {
  const server = http.createServer(app)
  server.listen(process.env.PORT || 8000, () => {
    console.log(`server listing to port ${process.env.PORT || 8000}`)
  })
}

main()
