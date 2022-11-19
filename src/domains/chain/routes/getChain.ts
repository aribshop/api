import { Router } from "express";
import * as LineRepository from "../repositories/lines";

/**
 * get User Chain
 */

const router = Router();

export default async function () {
  router.use(async (req, res) => {
    const userId = (req as any).auth.uid;
    const chain = await LineRepository.getChain(userId);
    res.json({ success: true, chain });
  });

  return router;
}
