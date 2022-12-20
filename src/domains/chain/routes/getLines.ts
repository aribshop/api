import { Router } from "express";
import { getAuthStuff } from "../../../firebase";
import * as LineRepository from "../repositories/lines";

/**
 * get all lines for a given user
 */

const router = Router();

export default async function () {
  router.use(async (req, res, next) => {
    try {
      const user = getAuthStuff(req);

      const lines = await LineRepository.getLines(user.site);
      res.json({ success: true, lines });
    } catch (e) {
      next(e);
    }
  });

  return router;
}
