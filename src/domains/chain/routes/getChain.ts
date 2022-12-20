import { Router } from "express";
import { getAuthStuff } from "../../../firebase";
import * as LineRepository from "../repositories/lines";

/**
 * get User Chain
 */

const router = Router();

export default async function () {
  router.use(async (req, res) => {
    const stuff = getAuthStuff(req);
    const chain = await LineRepository.getChain(stuff.uid,stuff.site);
    res.json({ success: true, chain });
  });

  return router;
}
