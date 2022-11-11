import { Router } from "express";
import * as LineRepository from "../repositories/lines";

/**
 * get all lines for a given user 
 */


const router = Router();


export default async function () {



    router.use(async (req, res) => {
        const lines = await LineRepository.getLines();
        res.json(lines);
    });

    return router;
}