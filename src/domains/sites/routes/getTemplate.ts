import { Router } from "express";
import * as SiteRepository from "../repositories/site";
const router = Router();

/**
 * get template data for a specific site
 */



export default async function () {

    router.get("/:siteId", async (req, res) => {
        const { siteId } = req.params;
        const template = await SiteRepository.getTemplate(siteId)

        res.json({ success: true, template });
    });

    return router;
}