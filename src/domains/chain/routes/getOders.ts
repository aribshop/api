import { Router } from "express";
import * as OrderRepository from "../repositories/order";

/**
 * get private line - for intern users (stuff)
 */



const router = Router();


export default async function () {



    router.use(async (req, res) => {

        // todo get user Id from token

        const userId = "5f9f1b9b9b9b9b9b9b9b9b9b";
        const lineId = "5f9f1b9b9b9b9b9b9b9b9b9b";

        const orders = await OrderRepository.getOrders(lineId, userId);
        res.json({ success: true, orders });
    });

    return router;
}