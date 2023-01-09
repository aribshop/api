import { delay } from "../../../core/util";
import { SiteNotFound, TemplateNotFound } from "../errors";
import { ITemplatedSiteAggregation } from "../types/aggregations/TemplatedSite";

import { ISiteEntity } from "../types/site";
import { ITemplateEntity, IUpdateTemplateEntity } from "../types/template";
import { SiteCollection, TemplateCollection } from "./db";

export async function getSite(
  subname: string
): Promise<ITemplatedSiteAggregation> {
  const siteDoc = await SiteCollection.doc(subname).get();
  if (!siteDoc.exists) throw new SiteNotFound(subname);

  const templateDoc = await TemplateCollection.doc(subname).get();
  if (!templateDoc.exists) throw new TemplateNotFound(subname);

  const site = siteDoc.data() as ISiteEntity;
  const template = templateDoc.data() as ITemplateEntity;

  return {
    ...site,
    template,
  } as ITemplatedSiteAggregation;
}

export async function getTemplate(siteId: string): Promise<ITemplateEntity> {
  const templateDoc = await TemplateCollection.doc(siteId).get();
  if (!templateDoc.exists) throw new TemplateNotFound(siteId);

  const template = templateDoc.data() as ITemplateEntity;

  return template;
}

export async function createSite(
  site: ISiteEntity,
  template: ITemplateEntity,
  userId: string
): Promise<ITemplatedSiteAggregation> {
  await SiteCollection.doc(site.subname).set(site);
  await TemplateCollection.doc(site.subname).set(template);

  return {
    ...site,
    user: userId,
    template: {
      ...template,
    },
  };
}

export async function setTemplate(
  siteId: string,
  template: IUpdateTemplateEntity
): Promise<ITemplateEntity> {
  try {
    await TemplateCollection.doc(siteId).update({
      ...template,
    });
  } catch {
    throw new TemplateNotFound(siteId);
  }

  return {
    ...template,
  } as ITemplateEntity;
}
