import { Router } from "express";
import purchase from "./routes/purchase";

const router = Router();

interface Props {}

export default async function (props: Props) {
  // todo force Anonymous Auth
  router.post("/purchase", await purchase());

  return router;
}

function handleError(err: any, req: any, res: any, next: (err?: any) => void) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next(err);
  }
}
