import { Router } from "express";
import { getAuthStuff } from "../../../firebase";
import * as OrganizeRepository from "../repositories/organize";

/**
 * get all tags for a given website
 */

const router = Router();

export default async function () {
  router.use(async (req, res) => {
    const stuff = getAuthStuff(req);
    // todo filter only tags for the given user
    const tags = await OrganizeRepository.getTags(stuff.site);
    res.json({ success: true, tags });
  });

  return router;
}
