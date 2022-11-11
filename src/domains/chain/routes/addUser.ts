import { Router } from "express";
import { validate, ValidationError, Joi } from 'express-validation'
import * as OrganizeRepository from "../repositories/organize";
import { IGroupEntity } from "../types/group";
/**
 * add user to group
 */


const router = Router();

interface Params {
    group: IGroupEntity,
    user: string,
}

const validation = {
    body: Joi.object({
        group: Joi.object({
            id: Joi.string().required(),
            site: Joi.string().required(),
            name: Joi.string().required(),
        }).required(),
        user: Joi.string().required(),
    })
}

router.use(validate(validation));

// todo add express error handler

export default async function () {

    router.use(async (req, res) => {
        const params = req.body as Params;
        const { group, user } = params;
        await OrganizeRepository.addUserToGroup(user, group);

        res.json({ success: true });
    });

    return router;
}