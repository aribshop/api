import { Router } from "express";
import * as OrganizeRepository from "../repositories/organize";

/**
 * get all groups that belongs to a given user
 */

const router = Router();

export default async function () {
  router.use(async (req, res) => {

    const userId = (req as any).auth.uid;
    const groups = await OrganizeRepository.getGroups(userId);
    res.json({ success: true, groups });
  });

  return router;
}
