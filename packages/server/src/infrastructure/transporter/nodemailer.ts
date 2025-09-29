import nodemailer from "nodemailer"

interface INodemailerService {
  send: (to: string, subject: string, text: string) => Promise<any>;
}

export class NodemailerService implements INodemailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ✅ use env variable
        pass: process.env.EMAIL_PASS, // ✅ use env variable
      },
    })

  }


  async send(to: string, subject: string, text: string): Promise<any> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };
    return this.transporter.sendMail(mailOptions);
  }
}
