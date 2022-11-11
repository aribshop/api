import { Router } from "express";
import { validate, ValidationError, Joi } from 'express-validation'
import * as OrganizeRepository from "../repositories/organize";
import { IGroupEntity } from "../types/group";


/**
 * tag is shared between all lines
 * tags is what combine groups into one force (store for example)
 */



const router = Router();

interface Params {
    group: IGroupEntity,
    tag: string,
}

const validation = {
    body: Joi.object({
        group: Joi.object({
            id: Joi.string().required(),
            site: Joi.string().required(),
            name: Joi.string().required(),
        }).required(),
        tag: Joi.string().required(),
    })
}

router.use(validate(validation));

// todo add express error handler

export default async function () {

    router.use(async (req, res) => {
        const params = req.body as Params;
        const { group, tag } = params;
        await OrganizeRepository.addTagToGroup(tag, group);

        res.json({ success: true });
    });

    return router;
}