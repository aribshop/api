import { Router } from "express";
import * as LineRepository from "../repositories/lines";

/**
 * get all lines for a given user
 */

const router = Router();

export default async function () {
  router.use(async (req, res) => {
    const userId = (req as any).auth.uid;

    const lines = await LineRepository.getLines(userId);
    res.json({ success: true, lines });
  });

  return router;
}
