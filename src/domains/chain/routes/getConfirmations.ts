import { Router } from "express";
import * as LineRepository from "../repositories/lines";
/**
 * get list of confirmations for a order
 */

const router = Router();

export default async function () {
  router.use("/:orderId", async (req, res) => {
    const { orderId } = req.params;

    const confirmations = await LineRepository.getConfirmations(orderId);
    res.json({ success: true, confirmations });
  });

  return router;
}
