import { Router } from "express";
import { validate, Joi } from 'express-validation'
import * as OrganizeRepository from "../repositories/organize";
import { INewTag } from "../types/tag";


const router = Router();

interface Params {
    tag: INewTag,
}

const validation = {
    body: Joi.object({
        tag: Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),

            // todo why you didn't include the SiteId, and you did in the group?
        }).required(),
    })
}

router.use(validate(validation));


export default async function () {

    router.use(async (req, res) => {
        const params = req.body as Params;
        const { tag } = params;
        const model = await OrganizeRepository.createTag(tag);

        res.json({ success: true, tag: model });
    });

    return router;
}