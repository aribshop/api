import { Router } from "express";
import { validate, Joi } from "express-validation";
import * as LinesRepository from "../repositories/lines";
import { INewLine } from "../types/chain";
import { INewTag } from "../types/tag";

const router = Router();

interface Params {
  line: INewLine;
}

const validation = {
  body: Joi.object({
    line: Joi.object({
      name: Joi.string().required(),
      maxOrders: Joi.number().required(),
      next: Joi.string().allow(null),
      expiresTime: Joi.number().required(),
      site: Joi.string().required(),
      confirmations: Joi.array().items(Joi.string()).required(),
      isPublic: Joi.boolean(),
    }),
  }),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { line } = params;
    const model = await LinesRepository.createLine(line);

    res.json({ success: true, line: model });
  });

  return router;
}
