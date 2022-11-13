
import { Router } from "express";
import * as ProductRepository from "../repositories/product";
const router = Router();

/**
* get all products for a specific site
* // todo : add pagination, and filter, and sort, and search
*/


export default async function () {

    router.use("/:siteId", async (req, res) => {
        const { siteId } = req.params;
        const products = await ProductRepository.getProducts(siteId);

        res.json({ success: true, products });
    });

    return router;
}