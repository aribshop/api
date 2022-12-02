import { Router } from "express";
import { validate, Joi } from "express-validation";
import * as ProductRepository from "../repositories/product";

const router = Router();

/**
 * deleting a product means, deleting the landing page, deleting the product from the database, Referrals ...
 */

interface Params {
  productId: string;
}

const validation = {
  body: Joi.object({
    productId: Joi.string().required(),
  }).required(),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { productId } = params;

    const userId = (req as any).auth.uid;

    await ProductRepository.deleteProduct(productId);

    res.json({ success: true });
  });

  return router;
}
