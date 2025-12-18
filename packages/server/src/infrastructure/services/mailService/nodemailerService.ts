import nodemailer from "nodemailer"
import { IMailInterface } from "@/domain/services/IMailService"
import dotenv from "dotenv"

// process the config files
dotenv.config()

export class NodemailerService implements IMailInterface {
  async send() {
    nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      }
    })
  }

}
