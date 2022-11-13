import { Router } from "express";
import * as OrderRepository from "../repositories/order";

/**
 * get private line - for intern users (stuff)
 */



const router = Router();


export default async function () {


    router.use(async (req, res) => {

        // todo get user Id from token

        const userId = (req as any).auth.user;
        const {lineId} = req.params;
        console.log(userId);
        const orders = await OrderRepository.getOrders(lineId, userId);
        res.json({ success: true, orders });
    });

    return router;
}