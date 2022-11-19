import { Router } from "express";
import * as UserRepository from "../repositories/users";

const router = Router();

export default async function () {
  router.get("/:clientId", async (req, res) => {
    const { clientId } = req.params;
    const client = await UserRepository.getClient(clientId);
    res.json({ success: true, client });
  });

  // todo get number of products has been ordered by this client

  return router;
}
