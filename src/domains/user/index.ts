import { Router } from "express";

import getUser from "./routes/getUser";


const router = Router();

router.use("/", getUser("nabil"));


export default function () {
    return router;
}