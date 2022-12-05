import { Router } from "express";
import * as UserRepository from "../repositories/users";

const router = Router();

/**
 * general route for getting the stuff Aggregated data
 * 1) from auth
 * 2) from id => for the Admin!
 */
export default async function () {
  router.get("/:stuffId?", async (req, res) => {
    const { stuffId } = req.params;
    const stuffIdFromAuth = (req as any).auth.uid;


    const stuff = await UserRepository.getStuff(stuffId ?? stuffIdFromAuth);
    res.json({ success: true, stuff });
  });

  return router;
}
