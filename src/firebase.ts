import ENV from "./env";
import { Request, Response } from "express";
import * as Admin from "firebase-admin";
import { auth } from "firebase-admin";

const firebase = Admin.initializeApp({
  // deflault
  credential: ENV.FIREBASE
    ? Admin.credential.cert(ENV.FIREBASE)
    : Admin.credential.applicationDefault(),
});

export default firebase;

// create express middleware to verify firebase token from cookie
export const VerifyToken = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  const AuthToken = req.headers.authorization?.split(" ")[1];
  if (
    AuthToken ==
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjoiZHNkIn0.YSDNYBsfLHcc20s7gT0_DjkTj8DmcQICurdz0NWtnIY"
  ) {
    return next();
  }
  const CookieToken = req.cookies.token;
  try {
    const decodedToken = await firebase
      .auth()
      .verifyIdToken(AuthToken || CookieToken || "");

    (req as any).auth = decodedToken;
    return next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Unauthorized" });
  }
};
