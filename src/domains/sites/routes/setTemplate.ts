import { Router } from "express";
import { validate, Joi } from "express-validation";
import { ISiteEntity } from "../types/site";

import * as SiteRepository from "../repositories/site";
import { ITemplateEntity, IUpdateTemplateEntity } from "../types/template";

const router = Router();
/**
 * set data of the template!
 * setting new tempale or updating the current Template, hense, id is optionnal!
 *
 */

interface Params {
  template: IUpdateTemplateEntity;
}

const validation = {
  body: Joi.object({
    template: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
      description: Joi.string().required(),
      previewOG: Joi.string().required(),
      id: Joi.string(), // FIXME what's the purpuse of ID!
      // todo add validation for the template data
    }).unknown(true),
  }),
};

// FIXME add validation!
//router.use(validate(validation));

export default async function () {
  router.post("/set/:siteId", async (req, res, next) => {
    console.log("hello world!");
    const params = req.body as Params;
    const { siteId } = req.params;
    const { template } = params;

    const userId = (req as any).auth.uid;

    try {
      const model = await SiteRepository.setTemplate(siteId, template);

      res.json({ success: true, template: model });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
