import { Router } from "express";

import addGroup from "./routes/addGroup";
import addTag from "./routes/addTag";
import addUser from "./routes/addUser";
import createGroup from "./routes/createGroup";
import createTag from "./routes/createTag";
import getTags from "./routes/getTags";
import getLines from "./routes/getLines";
import publicLines from "./routes/publicLines";
import getOrders from "./routes/getOders";
import moveOrder from "./routes/moveOrder";
import getGroups from "./routes/getGroups";
import { VerifyToken } from "../../firebase";
import getConfirmations from "./routes/getConfirmations";
import getChain from "./routes/getChain";
import getUnconfirmed from "./routes/getUnconfirmed";
import createLine from "./routes/createLine";
import getGroupDetails from "./routes/getGroupDetails";
import setupEvents from "./setupEvents";
import { ValidationError } from "express-validation";

const router = Router();

interface Props {}

export default async function (props: Props) {
  setupEvents();
  
  // chain
  router.get("/", VerifyToken, await getChain());

  // lines
  router.get("/lines", VerifyToken, await getLines());
  router.post("/line", VerifyToken, await createLine());
  router.get("/lines/public", await publicLines());

  // add user to group
  router.post("/user/add", VerifyToken, await addUser());

  // create tag and add it to groups
  router.post("/tag/create", VerifyToken, await createTag());
  router.post("/tag/add", VerifyToken, await addTag());
  router.get("/tags", VerifyToken, await getTags());

  // create new group and add it to line
  router.post("/group/create", VerifyToken, await createGroup());
  router.post("/group/add", VerifyToken, await addGroup());
  router.use("/group/details", VerifyToken, await getGroupDetails());
  router.get("/groups", VerifyToken, await getGroups());

  //orders
  router.use("/order/confirmations", VerifyToken, await getConfirmations());
  router.use("/order/unconfirmed", VerifyToken, await getUnconfirmed());
  router.post("/orders/move", VerifyToken, await moveOrder());

  router.use(handleError);
  router.use("/line", VerifyToken, await getOrders());

  return router;
}

function handleError(err: any, req: any, res: any, next: (err?: any) => void) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next(err);
  }
}
