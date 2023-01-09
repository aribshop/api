import { IOrderEntity } from "@/domains/chain/types/order";
import { Emit, Fetch } from "@/events";
import { Router } from "express";
import { validate, ValidationError, Joi } from "express-validation";
import { FirstLineNotFound } from "../erros";
import { IPurchase } from "../types/purchase";

const router = Router();

/**
 * purchaseOrder - Creates a new order for a product - post a demande for a product
 */

interface Params extends IPurchase {}

const validation = {
  body: Joi.object({
    id: Joi.string().required(), // todo make it UIID, the problem we don't want the Public Website to use libraries!
    product: Joi.string().required(),
    quantity: Joi.number().required(),
    clientName: Joi.string().required(),
    clientPhone: Joi.string().required(),
    site: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number().required(),
  }),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;

    const line = await Fetch("chain:getSiteFirstLine", params.site);
    if (!line) throw new FirstLineNotFound(params.site, params.product);

    const client = await Fetch("users:ensureClient", {
      name: params.clientName,
      phone: params.clientPhone,
    });

    Emit("chain:pushOrder", {
      id: params.id,
      product: params.product,
      client: client.uid,
      date: new Date(),
      lastUpdate: new Date(),
      metadata: {},
      productValue: {
        price: params.price,
        discount: params.discount,
      },
      site: params.site,
      line: line.id,
    });

    res.json({ success: true, orderId: params.id });
  });

  return router;
}
