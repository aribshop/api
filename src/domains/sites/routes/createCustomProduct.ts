
import { Router } from "express";
import { validate, Joi } from 'express-validation'
import { ICustomProductEntity, IStandardProductEntity } from "../types/product";

import * as ProductRepository from "../repositories/product";


const router = Router();

/**
 * create a custom product
 */


interface Params {
    product: ICustomProductEntity,
    siteId: string,
}

const validation = {
    body: Joi.object({
        product: Joi.object({
            metadata: Joi.object({
                name: Joi.string().required(),
                description: Joi.string().required(),
                tag: Joi.array().items(Joi.string()).required(),
            }).required(),
            isCustom: Joi.boolean().valid(true).required(),
            form: Joi.object({
                version: Joi.number().required(),
                lastUpdated: Joi.date().required(),
                fields: Joi.array().items(Joi.object({
                    name: Joi.string().required(),
                    type: Joi.string().required(),
                    required: Joi.boolean().required(),
                    options: Joi.array().items(Joi.string()),
                })).required(),
            }).required(),
        }).required(),


        siteId: Joi.string().required(), // FIXME this is not a good idea, the siteId should be in the url
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