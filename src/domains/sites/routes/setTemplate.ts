import { Router } from "express";
import { validate, Joi } from "express-validation";
import { ISiteEntity } from "../types/site";

import * as SiteRepository from "../repositories/site";
import { ITemplateEntity, IUpdateTemplateEntity } from "../types/template";
import { getAuthStuff } from "@/firebase";

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
      // todo add validation for the template data
    }).unknown(true),
  }),
};

// FIXME add validation!
//router.use(validate(validation));

export default async function () {
  router.post("/set", async (req, res, next) => {
    console.log("hello world!");
    const params = req.body as Params;
    const { template } = params;

    const user = getAuthStuff(req);

    try {
      const model = await SiteRepository.setTemplate(user.site, template);

      res.json({ success: true, template: model });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
