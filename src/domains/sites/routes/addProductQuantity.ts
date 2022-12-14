import { Router } from "express";
import { validate, Joi } from "express-validation";
import * as ProductRepository from "../repositories/product";

const router = Router();
/**
 * for now, it make sense for standard products only
 */

interface Params {
  productId: string;
  isCustom: boolean;
  quantity: number;
}

const validation = {
  body: Joi.object({
    productId: Joi.string().required(),
    isCustom: Joi.boolean().required(),
    quantity: Joi.number().required(),
  }).required(),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { productId, quantity, isCustom } = params;

    if (isCustom) {
      return res.send(new Error("Custom products are not supported yet"));
    }

    const userId = (req as any).auth.uid;

    await ProductRepository.addQuantityToProduct(productId, quantity);

    res.json({ success: true });
  });

  return router;
}
