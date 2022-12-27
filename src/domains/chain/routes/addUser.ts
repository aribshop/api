import { getAuthStuff } from "@/firebase";
import auth from "@/repository/auth";
import { Router } from "express";
import { validate, Joi } from "express-validation";
import * as OrganizeRepository from "../repositories/organize";
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
  router.use(async (req, res, n) => {
    try {
      const params = req.body as Params;
      const { groupId, user } = params;
      const authUser = getAuthStuff(req);

      if (!authUser.isAdmin) {
        throw Error("you don't have permission to create a group");
      }
      
      await OrganizeRepository.addUserToGroup(user, groupId);
      const groups = await OrganizeRepository.getGroups(user);
      const group = groups.find((group) => group.id === groupId);
      if (!group) {
        throw new Error("group not found");
      }

      await auth.setCustomUserClaims(user, { site: group.site });

      res.json({ success: true });
    } catch (e) {
      n(e);
    }
  });

  return router;
}
