

import { Router } from "express";
import * as ProductRepository from "../repositories/product";
const router = Router();



/**
 * get product from its ID, it doesn't matter if its a standard product or a custom product
 */


export default async function () {

    router.use("/:productId", async (req, res) => {
        const { productId } = req.params;
        const product = await ProductRepository.getProduct(productId);

        res.json({ success: true, product });
    });

    return router;
}