import { Router } from "express";
import * as LineRepository from "../repositories/lines";
/**
 * get list of unfinished confirmationTypes for a order
 * // TODO i think this entire route is a quick fix, since the frontend has all the necessary data to derive the unconfirmed confirmations
 * when user click on Order -> Confirm
 */

const router = Router();

export default async function () {
  router.get("/:orderId", async (req, res) => {
    const { orderId } = req.params;

    const unconfirmed = await LineRepository.getUnconfirmedConfirmations(orderId);
    res.json({ success: true, unconfirmed });
  });

  return router;
}
