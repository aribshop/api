import { Router } from "express";
import { validate, Joi } from "express-validation";
import { ISiteEntity } from "../types/site";

import * as SiteRepository from "../repositories/site";
import * as Redis from "../repositories/redis";
import { ITemplateEntity } from "../types/template";
import auth from "../../../repository/auth";

const router = Router();
/**
 * create a site
 */

interface Params {
  site: ISiteEntity;
  template: ITemplateEntity; // todo for now let's make the user generate the UIID
}

const validation = {
  body: Joi.object({
    template: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
      previewOG: Joi.string().required(),
      // todo add validation for the template data
    }).required(),
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
    const { site, template } = params;
    const userId = (req as any).auth.uid;
    // todo block this request of the current user belongs to a site, V1 users can only have one site
    const model = await SiteRepository.createSite(
      site,
      {
        ...template,
        id: site.subname,
      },
      userId
    );

    await Redis.linkSubdomainToTemplate(site.subname, template.type);
    await auth.updateUser(userId, { displayName: "Admin" });
    await auth.setCustomUserClaims(userId, {
      site: model.subname,
      isAdmin: true,
    });

    res.json({ success: true, site: model, refresh: true });
  });

  return router;
}
