import { Router } from "express";
import { validate, ValidationError, Joi } from 'express-validation'
import * as OrganizeRepository from "../repositories/organize";
import { IGroupEntity } from "../types/group";




const router = Router();

interface Params {
    group: IGroupEntity,
    line: string,
}

const validation = {
    body: Joi.object({
        group: Joi.object({
            id: Joi.string().required(),
            site: Joi.string().required(),
            name: Joi.string().required(),
        }).required(),
        line: Joi.string().required(),
    })
}

router.use(validate(validation));


export default async function () {

    router.use(async (req, res) => {
        const params = req.body as Params;
        const { group, line } = params;
        const model = await OrganizeRepository.addGroupToLine(line, group);

        res.json({ success: true, line: model });
    });

    return router;
}