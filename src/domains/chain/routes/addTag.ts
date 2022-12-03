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
    groupId: string;
    tag: string,
}

const validation = {
    body: Joi.object({
        groupId: Joi.string().required(),
        tag: Joi.string().required(),
    })
}

router.use(validate(validation));

// todo add express error handler

export default async function () {

    router.use(async (req, res) => {
        const params = req.body as Params;
        const { groupId, tag } = params;
        await OrganizeRepository.addTagToGroup(tag, groupId);

        res.json({ success: true });
    });

    return router;
}