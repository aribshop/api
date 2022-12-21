import { Router } from "express";
import { VerifyToken } from "../../firebase";
import fetchUser from "./routes/fetchUser";
import getClient from "./routes/getClient";
import getStuff from "./routes/getStuff";
import getUser from "./routes/getUser";

import setupEvents from "./setupEvents";
const router = Router();

interface Props {}

export default async function (props: Props) {

  setupEvents();

  router.use("/stuff", VerifyToken, await getStuff());

  router.use("/client", VerifyToken, await getClient());

  router.use("/user/phone", VerifyToken, await fetchUser());

  router.use("/user", VerifyToken, await getUser());

  router.use(handleError);

  return router;
}



function handleError(err: any, req: any, res: any, next: (err?: any) => void) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next(err);
  }
}
