import { Router } from "express";
import { getAuthStuff } from "../../../firebase";
import * as UserRepository from "../repositories/users";

const router = Router();

/**
 * general route for getting the stuff Aggregated data
 * 1) from auth
 * 2) from id => for the Admin!
 */
export default async function () {
  router.get("/:stuffId?", async (req, res, next) => {
    try {
      const { stuffId } = req.params;

      if (stuffId) {
        getAuthStuff(req); 
        const stuff = await UserRepository.getStuff(stuffId);
        res.json({ success: true, stuff });
      } else {
        // todo refactor this!, specially the main IF!
        const stuff = (req as any).auth;
        res.json({ success: true, stuff });
      }
    } catch (e) {
      next(e);
    }
  });

  return router;
}
