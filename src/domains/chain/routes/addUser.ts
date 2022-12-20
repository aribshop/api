import { Router } from "express";
import { validate, ValidationError, Joi } from "express-validation";
import * as OrganizeRepository from "../repositories/organize";
import { IGroupEntity } from "../types/group";
/**
 * add user to group
 */

const router = Router();

interface Params {
  groupId: string;
  user: string;
}

const validation = {
  body: Joi.object({
    groupId: Joi.string().required(),

    user: Joi.string().required(),
  }),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { groupId, user } = params;
    // todo add site to the user custom claims
    await OrganizeRepository.addUserToGroup(user, groupId);

    res.json({ success: true });
  });

  return router;
}
