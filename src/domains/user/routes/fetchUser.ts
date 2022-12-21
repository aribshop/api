import { Router } from "express";
import { UserNotFoundByPhone } from "../errors";
import * as UserRepository from "../repositories/users";

const router = Router();
/**
 * Ideal scenario when the admin invite a new user, the user will receive an email with a link to the site
 */

export default async function () {
  router.get("/:phone", async (req, res, next) => {
    const { phone } = req.params;

    try {
      const user = await UserRepository.getUserByPhone(phone);
      res.json({ success: true, user });
    } catch (e) {
      next(new UserNotFoundByPhone(phone));
    }
  });

  return router;
}
