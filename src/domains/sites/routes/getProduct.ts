

import { Router } from "express";
import * as ProductRepository from "../repositories/product";
const router = Router();



/**
 * get product from its ID, it doesn't matter if its a standard product or a custom product
 * // todo what's the difference between this and getProductDetails?
 */


export default async function () {

    router.get("/:siteId/:productId", async (req, res) => {
        const { productId,siteId } = req.params;
        const product = await ProductRepository.getProduct(siteId,productId);

        res.json({ success: true, product });
    });

    return router;
}