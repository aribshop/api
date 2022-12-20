import { Router } from "express";
import * as SiteRepository from "../repositories/site";
const router = Router();

/**
 * get template data for a specific site
 */

export default async function () {
  router.get("/:siteId", async (req, res, next) => {
    const { siteId } = req.params;

    try {
      const template = await SiteRepository.getTemplate(siteId);

      res.json({ success: true, template });
    } catch (e) {
      next(e);
    }
  });

  return router;
}
