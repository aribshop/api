import { Router } from "express";
import * as OrderRepository from "../repositories/order";

/**
 * get private line - for intern users (stuff)
 */



const router = Router();


export default async function () {


    router.use("/:lineId", async (req, res) => {


        const userId = (req as any).auth.uid;
        const { lineId } = req.params;
        console.log(lineId);
        const orders = await OrderRepository.getOrders(lineId, userId);
        res.json({ success: true, orders });
    });

    return router;
}