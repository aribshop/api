import { Router } from "express";
import * as UserRepository from "../repositories/users";

const router = Router();

export default async function () {
  router.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    const user = await UserRepository.getUser(userId);
    res.json({ success: true, user });
  });

  return router;
}
