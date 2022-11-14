import { Router } from "express";
import { validate, Joi } from 'express-validation'
import { ISiteEntity } from "../types/site";

import * as ProductRepository from "../repositories/product";


const router = Router();
/**
 * create a site, with a template & template data
 */


interface Params {
    site: ISiteEntity,
}

const validation = {
    body: Joi.object({

        
        
        
    }).required(),


}

router.use(validate(validation));


export default async function () {

    router.use(async (req, res) => {
        const params = req.body as Params;
        const { product, siteId } = params;
        const model = await ProductRepository.createProduct(product, siteId);

        res.json({ success: true, product: model });
    });

    return router;
}