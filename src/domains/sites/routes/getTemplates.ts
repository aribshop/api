import { Router } from "express";
import * as SiteRepository from "../repositories/site";
import templates from "../repositories/templates";
import { ITemplateEntity, TemplateType } from "../types/template";
const router = Router();

/**
 * this api get list of templates
 * honestly, the fronend should know how to create template form the template type
 * how? i don't know, but i think it should be possible
 * for now, we will hard code the template configuration both here, and in the admin and in the public!
 */

export default async function () {
  router.get("/", async (req, res) => {
    res.json({ success: true, templates });
  });

  return router;
}
