import { Router } from "express";
import * as UserRepository from "../repositories/users";

const router = Router();

export default async function () {
  router.get("/:siteId/:stuffId", async (req, res) => {
    const { siteId, stuffId } = req.params;
    const stuff = await UserRepository.getStuff(stuffId, siteId);
    res.json({ success: true, stuff });
  });

  return router;
}
