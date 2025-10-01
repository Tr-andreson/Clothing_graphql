import nodemailer from "nodemailer"
import { IMailInterface } from "../../../domain/services/IMailService"

export class NodemailerService implements IMailInterface {
  async send() {
    nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'tushar@lovoj.com', // Your email address
        pass: 'fmlmqaojexteybgo',  // Your email password (use environment variables for security)
      }
    })
  }

}
