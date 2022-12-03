import { Router } from "express";
import { validate, Joi } from "express-validation";
import * as ProductRepository from "../repositories/product";

const router = Router();

/**
 * deleting a product means, deleting the landing page, deleting the product from the database, Referrals ...
 */

export default async function () {
  router.delete("/:productId", async (req, res) => {
    const { productId } = req.params;


    const userId = (req as any).auth.uid;

    await ProductRepository.deleteProduct(productId);

    res.json({ success: true });
  });

  return router;
}
