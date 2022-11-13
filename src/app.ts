import { Express } from "express";
import User from "./domains/user";
import Chain from "./domains/chain";
import Sites from "./domains/sites";

export async function init(props: { express: Express, auth: string }) {

    props.express.use("/user", User());
    props.express.use("/chain", await Chain({
        auth: props.auth
    }));

    props.express.use("/site", await Sites({}))

}