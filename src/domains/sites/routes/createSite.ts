import { Router } from "express";
import { validate, Joi } from 'express-validation'
import { ISiteEntity } from "../types/site";

import * as SiteRepository from "../repositories/site";


const router = Router();
/**
 * create a site, with a template & template data
 */


interface Params {
    site: ISiteEntity,
}

const validation = {
    body: Joi.object({
        site: Joi.object({
            template: Joi.object({
                name: Joi.string().required(),
                description: Joi.string().required(),
                type: Joi.string().required(),

                // todo add validation for the template data
            }).required(),
            subname: Joi.string().required(),
            description: Joi.string().required(),
        }).required(),
    }).required(),
}


router.use(validate(validation));


export default async function () {

    router.use(async (req, res) => {
        const params = req.body as Params;
        const { site } = params;
        const userId = (req as any).auth.uid;

        const model = await SiteRepository.createSite(site, userId);

        res.json({ success: true, site: model });
    });

    return router;
}