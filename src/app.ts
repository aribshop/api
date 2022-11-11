import { Express } from "express";
import User from "./domains/user";
import Chain from "./domains/chain";

export async function init(express: Express, auth: string) {

    express.use("/user", User());
    express.use("/chain", await Chain({
        auth
    }));

}