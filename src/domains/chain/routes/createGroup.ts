import { Router } from "express";
import { validate, Joi } from "express-validation";
import * as OrganizeRepository from "../repositories/organize";
import { INewGroup } from "../types/group";

const router = Router();

interface Params {
  group: INewGroup;
}

const validation = {
  body: Joi.object({
    group: Joi.object({
      site: Joi.string().required(),
      name: Joi.string().required(),
      viewOnly: Joi.boolean().required(),
    }).required(),
  }),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { group } = params;
    const userId = (req as any).auth.uid;

    const model = await OrganizeRepository.createGroup(group, userId);

    res.json({ success: true, group: model });
  });

  return router;
}
