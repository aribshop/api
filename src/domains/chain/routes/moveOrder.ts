/**
 * from order to next line - confirm order and move to next line
 * 
 * 
 */

import { Router } from "express";
import { validate, ValidationError, Joi } from 'express-validation'
import * as OrderRepository from "../repositories/order";
import { IConfirmationEntity } from "../types/chain";
import { IOrderEntity } from "../types/order";




const router = Router();

interface Params {
    orderId: string,
    confirmation: IConfirmationEntity,
}

const validation = {
    body: Joi.object({
        orderId: Joi.string().required(),
        confirmation: Joi.object({
            id: Joi.string().uuid().required(),
            date: Joi.date().required(),
            src: Joi.string(),
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
        const { confirmation, orderId } = params;

        // todo check if confirmation is valid for the order and line

        // todo attach the src to the confirmation if it is a file
         await OrderRepository.moveOrder(orderId, confirmation);

        res.json({ success: true, confirmation});
    });

    return router;
}