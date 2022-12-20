import ENV from "./env";
import { Request, Response } from "express";
import * as Admin from "firebase-admin";
import { auth } from "firebase-admin";
import { IStuffAggregation } from "./domains/user/types/aggregations/stuff";
import { NotStuffError } from "./errors";

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
  const CookieToken = req.cookies.token;


  if (
    !CookieToken &&
    (!AuthToken ||
      AuthToken ==
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjoiZHNkIn0.YSDNYBsfLHcc20s7gT0_DjkTj8DmcQICurdz0NWtnIY") &&
    ENV.TEMP_USER
  ) {
    console.log("taking DEV user");
    (req as any).auth = ENV.TEMP_USER;
    return next();
  }

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

export const getAuthStuff = (req: Request) => {
  const auth = (req as any).auth as IStuffAggregation;
  console.log("auth", auth);

  if (!auth.site) throw new NotStuffError(auth.uid);

  return Object.assign(
    {
      isAdmin: false,
      picture: "https://laknabil.me/nabil.png",
    } as IStuffAggregation,
    auth
  );
};
