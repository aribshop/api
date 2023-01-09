import { Router } from "express";
import { validate, Joi } from "express-validation";
import { ISiteEntity } from "../types/site";

import * as SiteRepository from "../repositories/site";
import * as Redis from "../repositories/redis";
import { ITemplateEntity } from "../types/template";
import auth from "../../../repository/auth";
import templates from "../repositories/templates";

const router = Router();
/**
 * create a site
 */

interface Params {
  site: ISiteEntity;
  templateType: ITemplateEntity["type"];
}

const validation = {
  body: Joi.object({
    templateType: Joi.string().required(),
    site: Joi.object({
      subname: Joi.string().required(),
      description: Joi.string().required(),
      name: Joi.string().required(),
    }).required(),
  }).required(),
};

router.use(validate(validation));

export default async function () {
  router.use(async (req, res) => {
    const params = req.body as Params;
    const { site, templateType } = params;

    const template = templates.find((t) => t.type === templateType)!;

    const userId = (req as any).auth.uid;
    // todo block this request of the current user belongs to a site, V1 users can only have one site
    const model = await SiteRepository.createSite(site, template, userId);

    await Redis.linkSubdomainToTemplate(site.subname, templateType);
    await auth.updateUser(userId, { displayName: "Admin" });
    await auth.setCustomUserClaims(userId, {
      site: model.subname,
      isAdmin: true,
    });

    res.json({ success: true, site: model, refresh: true });
  });

  return router;
}
