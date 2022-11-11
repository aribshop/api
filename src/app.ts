import { Express } from "express";
import User from "./domains/user";

export async function init(express: Express) {


    // delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    express.use("/user", User());

}