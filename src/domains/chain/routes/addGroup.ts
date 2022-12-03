import { Router } from "express";
import { validate, ValidationError, Joi } from "express-validation";
import * as OrganizeRepository from "../repositories/organize";
import { IGroupEntity } from "../types/group";

const router = Router();

interface Params {
  groupId: string;
  line: string;
}

const validation = {
  body: Joi.object({
    groupId: Joi.string().required(),
    line: Joi.string().required(),
  }),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { groupId, line } = params;
    const model = await OrganizeRepository.addGroupToLine(line, groupId);

    res.json({ success: true, line: model });
  });

  return router;
}
