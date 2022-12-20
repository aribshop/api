import { Router } from "express";
import { getAuthStuff } from "../../../firebase";
import * as OrganizeRepository from "../repositories/organize";

/**
 * get all groups that belongs to a given user
 */

const router = Router();

export default async function () {
  router.use(async (req, res) => {

    const stuff = getAuthStuff(req);
    const groups = await OrganizeRepository.getGroups(stuff.uid);
    res.json({ success: true, groups });
  });

  return router;
}
