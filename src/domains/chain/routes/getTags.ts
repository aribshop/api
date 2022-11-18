import { Router } from "express";
import * as OrganizeRepository from "../repositories/organize";

/**
 * get all tags for a given website
 */

const router = Router();

export default async function () {
  router.use(async (req, res) => {
    const websiteId = "123";
    const tags = await OrganizeRepository.getTags(websiteId);
    res.json({ success: true, tags });
  });

  return router;
}
