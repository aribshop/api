import { Router } from "express";
import * as LineRepository from "../repositories/lines";

/**
 * get all lines for a given user 
 */


const router = Router();


export default async function () {



    router.use(async (req, res) => {

        // todo get user Id from token

        const userId = "5f9f1b9b9b9b9b9b9b9b9b9b";
        const lines = await LineRepository.getLines(userId);
        res.json(lines);
    });

    return router;
}