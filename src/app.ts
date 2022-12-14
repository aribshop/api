import { Express } from "express";
import User from "./domains/user";
import Chain from "./domains/chain";
import Sites from "./domains/sites";
import Payment from "./domains/payment";

export async function init(props: { express: Express; auth: string }) {
  props.express.use("/users", await User({}));
  props.express.use("/chain", await Chain({}));

  props.express.use("/site", await Sites({}));
  props.express.use("/payment", await Payment({}));
}
