import { Router } from "express";
import { validate, Joi } from "express-validation";
import { IStandardProductEntity } from "../types/product";

import * as ProductRepository from "../repositories/product";
import { getAuthStuff } from "@/firebase";

const router = Router();

/**
 * create new product, but the site template must support a standard product, not the custom product
 */

interface Params {
  product: IStandardProductEntity;
}

const validation = {
  body: Joi.object({
    product: Joi.object({
      id: Joi.string().uuid().required(),
      isCustom: Joi.boolean().valid(false).required(),
      metadata: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        tag: Joi.array().items(Joi.string()).required(),
      }).required(),
      isPaused: Joi.boolean().valid(false).required(),
      price: Joi.number().required(),
      quantity: Joi.number().required(),
      discount: Joi.number().required(),
      picture: Joi.string().required(),
    }).required(),
  }).required(),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { product } = params;
    const user = getAuthStuff(req);
    const model = await ProductRepository.createProduct(product, user.site);

    res.json({ success: true, product: model });
  });

  return router;
}
