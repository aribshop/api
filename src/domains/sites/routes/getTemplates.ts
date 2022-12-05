import { Router } from "express";
import * as SiteRepository from "../repositories/site";
import { ITemplateEntity, TemplateType } from "../types/template";
const router = Router();

/**
 * this api get list of templates, for now its only the template name
 * honestly, the fronend should know how to create template form the template type
 * how? i don't know, but i think it should be possible
 * // todo create json schema for template creation
 */

export default async function () {
  router.get("/", async (req, res) => {
    const templates: ITemplateEntity[] = [
      {
        id: "1",
        name: "Dentist",
        type: TemplateType.Landing,
        previewOG:
          "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75",
      },
      {
        id: "2",
        name: "Store",
        type: TemplateType.Store,
        previewOG:
          "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75",
      },
    ];

    res.json({ success: true, templates });
  });

  return router;
}
