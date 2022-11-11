import { Router } from "express";
import { label } from "../constants/general";


const router = Router();

router.use((req, res, next) => {
    console.time(label);
    next();
    console.timeEnd(label);
});



export default function (name: string) {
    router.get("/", (req, res) => {
        res.send("Hello World! "+name);
    });

    return router;
};