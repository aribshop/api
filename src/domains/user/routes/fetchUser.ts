import { Router } from "express";
import * as UserRepository from "../repositories/users";

const router = Router();
/**
 * when the admin invite a new user, the user will receive an email with a link to the site
 */

export default async function () {
  router.get("/:phone", async (req, res) => {
    const { phone } = req.params;
    const user = await UserRepository.getUserByPhone(phone);
    res.json({ success: true, user });
  });

  return router;
}
