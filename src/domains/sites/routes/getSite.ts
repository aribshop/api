import { Router } from "express";
import * as SiteRepository from "../repositories/site";
const router = Router();

/**
 * get the site informations (owner, description, template, etc)
 * the public data
 * // todo site + template, isn't that an aggregation!
 */

export default async function () {
  router.use("/:subname", async (req, res,next) => {
    const { subname } = req.params;
    
    try {
      const site = await SiteRepository.getSite(subname);
      res.json({ success: true, site });
    } catch (error) {
        next(error);
    }
  });

  return router;
}
