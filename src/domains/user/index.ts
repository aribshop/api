import { Router } from "express";
import { jwt } from "../..";
import fetchUser from "./routes/fetchUser";
import getClient from "./routes/getClient";
import getStuff from "./routes/getStuff";
import getUser from "./routes/getUser";

const router = Router();

interface Props {}

export default async function (props: Props) {
  router.use("/stuff", jwt, await getStuff());

  router.use("/client", jwt, await getClient());

  router.use("/user/phone", jwt, await fetchUser());

  router.use("/user", jwt, await getUser());

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
