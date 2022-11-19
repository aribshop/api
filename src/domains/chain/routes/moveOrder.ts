/**
 * from order to next line - confirm order and move to next line
 * 
 * 
 */

import { Router } from "express";
import { validate, ValidationError, Joi } from 'express-validation'
import * as OrderRepository from "../repositories/order";
import { IConfirmationEntity } from "../types/chain";
import { IOrderEntity, IOrderModel } from "../types/order";




const router = Router();

interface Params {
    order: IOrderModel,
    confirmation: IConfirmationEntity,
}

const validation = {
    body: Joi.object({
        order: Joi.object({
            id: Joi.string().required(),
            user: Joi.string().required(),
            site: Joi.string().required(),
            product: Joi.string().required(),
            price: Joi.number().required(),
        }).required(),
        confirmation: Joi.object({
            type: Joi.string().required(),
            group: Joi.string(),
            user: Joi.string(),
            line: Joi.string().required(),
            order: Joi.string().required(),
        }).required(),
    })
}

router.use(validate(validation));


export default async function () {

    router.use(async (req, res) => {
        const params = req.body as Params;
        const { confirmation, order } = params;

        // todo check if confirmation is valid for the order and line

        // todo attach the src to the confirmation if it is a file
        const model = await OrderRepository.moveOrder(order, confirmation);

        res.json({ success: true, line: model });
    });

    return router;
}