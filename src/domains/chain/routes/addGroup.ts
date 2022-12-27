import { Router } from "express";
import { validate, Joi } from "express-validation";
import * as OrganizeRepository from "../repositories/organize";

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
    await OrganizeRepository.addGroupToLine(line, groupId);

    // FIXME i don't know how to return the model
    res.json({ success: true});
  });

  return router;
}
