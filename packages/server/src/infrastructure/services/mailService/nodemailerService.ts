import { IMailInterface } from "./interface";
import nodemailer from "nodemailer"

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
