import { Router } from "express";
import * as SiteRepository from "../repositories/site";
import { TemplateType } from "../types/template";
const router = Router();


/**
 * this api get list of templates, for now its only the template name 
 * honestly, the fronend should know how to create template form the template type
 * how? i don't know, but i think it should be possible
 * // todo create json schema for template creation
 */



export default async function () {

    router.use(async (req, res) => {

        const templates = Object.values(TemplateType);

        res.json({ success: true, templates });
    });

    return router;
}