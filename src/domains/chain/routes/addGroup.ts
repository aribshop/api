import { getAuthStuff } from "@/firebase";
import { Router } from "express";
import { validate, Joi } from "express-validation";
import { YouDontHavePermissionError } from "../errors";
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

    const user = getAuthStuff(req);

    if (!user.isAdmin) throw new YouDontHavePermissionError(groupId, "group");

    await OrganizeRepository.addGroupToLine(line, groupId);

    //TIP when updating, RTDB will send a notification to the client!
    res.json({ success: true });
  });

  return router;
}
