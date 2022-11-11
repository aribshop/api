import { Router } from "express";
import * as LineRepository from "../repositories/lines";

/**
 * get private line - for intern users (stuff)
 */



const router = Router();


export default async function () {



    router.use(async (req, res) => {

        // todo get user Id from token

        const siteId = "5f9f1b9b9b9b9b9b9b9b9b9b";

        const lines = await LineRepository.getPublicLines(siteId);
        res.json({ success: true, lines });
    });

    return router;
}