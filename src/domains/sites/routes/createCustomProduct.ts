import { Router } from "express";
import { validate, Joi } from "express-validation";
import { ICustomProductEntity, IStandardProductEntity } from "../types/product";

import * as ProductRepository from "../repositories/product";
import { getAuthStuff } from "@/firebase";

const router = Router();

/**
 * create a custom product
 */

interface Params {
  product: ICustomProductEntity;
}

const validation = {
  body: Joi.object({
    product: Joi.object({
      id: Joi.string().uuid().required(),

      metadata: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        tag: Joi.array().items(Joi.string()).required(),
      }).required(),
      isCustom: Joi.boolean().valid(true).required(),
      isPaused: Joi.boolean().valid(false).required(),
      dailyLimit: Joi.number(), // FIXME this is a quick fix, the /getCustomProduct is returning this! and in the frontend we are using the same type, i think this should be an aggregated with the lines!

      form: Joi.object({
        version: Joi.number().required(),
        lastUpdated: Joi.date().required(),
        fields: Joi.array()
          .items(
            Joi.object({
              name: Joi.string().required(),
              type: Joi.string().required(),
              required: Joi.boolean().required(),
              options: Joi.array().items(Joi.string()),
            })
          )
          .required(),
      }).required(),
    }).required(),
  }).required(),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { product } = params;
    const user = getAuthStuff(req);
    // todo test if the product is valid, specially the custom product

    const model = await ProductRepository.createProduct(product, user.site);

    res.json({ success: true, product: model });
  });

  return router;
}
