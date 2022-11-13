import { Express } from "express";
import User from "./domains/user";
import Chain from "./domains/chain";

export async function init(props: { express: Express, auth: string }) {

    props.express.use("/user", User());
    props.express.use("/chain", await Chain({
        auth: props.auth
    }));

}