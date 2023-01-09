import { getAuthStuff } from "@/firebase";
import { Router } from "express";
import { validate, Joi } from "express-validation";
import { YouDontHavePermissionError } from "../errors";
import * as OrganizeRepository from "../repositories/organize";

/**
 * tag is shared between all lines
 * tags is what combine groups into one force (store for example)
 */

const router = Router();

interface Params {
  groupId: string;
  tag: string;
}

const validation = {
  body: Joi.object({
    groupId: Joi.string().required(),
    tag: Joi.string().required(),
  }),
};

router.use(validate(validation));


export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { groupId, tag } = params;
    
    const user = getAuthStuff(req);

    if (!user.isAdmin) throw new YouDontHavePermissionError(groupId,"group");
    
    await OrganizeRepository.addTagToGroup(tag, groupId);

    res.json({ success: true });
  });

  return router;
}
