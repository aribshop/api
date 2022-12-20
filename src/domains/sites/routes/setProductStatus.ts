import { Router } from "express";
import { validate, Joi } from "express-validation";
import * as ProductRepository from "../repositories/product";

const router = Router();
/**
 * either set Paused or Active status
 */

interface Params {
  productId: string;
  siteId: string;
  status: boolean;
}

const validation = {
  body: Joi.object({
    productId: Joi.string().required(),
    siteId: Joi.string().required(),
    status: Joi.boolean().required(),
  }).required(),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { productId, status, siteId } = params;
    const userId = (req as any).auth.uid;

    await ProductRepository.setProductStatus(siteId, productId, status);

    res.json({ success: true });
  });

  return router;
}
