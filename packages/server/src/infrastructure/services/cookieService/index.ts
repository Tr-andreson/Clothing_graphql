import { Response } from "express";

export class CookieService {

  setAuthCookie(res: Response, token: string) {
    res.cookie("auth", token, {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24
    });
  }

  clearAuthCookie(res: Response) {
    res.clearCookie("auth");
  }

}
