import { delay } from "../../../core/util";

import { ISiteEntity } from "../types/site";
import {
  ILandingTemplateEntity,
  IStoreTemplateEntity,
  ITemplateEntity,
  IUpdateTemplateEntity,
  TemplateType,
} from "../types/template";

export async function getSite(subname: string): Promise<ISiteEntity> {
  await delay(1000);

  return {
    subname,
    id: "sdsd",
    name:"Amazon INC",
    description: "sdsd",
    user: "sdsd",
    template: {
      // the generic TemplateModel
      id: "sdsd",
      type: TemplateType.Landing,
      name: "Landing",
      description: "Landing template",
        previewOG:"https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75",
    },
  } as ISiteEntity;
}

export async function getTemplate(siteId: string): Promise<ITemplateEntity> {
  await delay(1000);

  if (siteId.length % 2 === 0) {
    return {
      id: siteId,
      name: "My template",
      description: "My template description",
      type: TemplateType.Landing,
      backgroundPicture: "https://laknabil.me/background.png",
      profilePicture: "https://laknabil.me/nabil.png",
      title: "Lakrib Nabil",
      previewOG:
        "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75",

      sections: [
        {
          id: "sdsd",
          title: "My section",
          description: "My section description",
          backgroundPicture: "https://laknabil.me/background.png",
        },
      ],
    } as ILandingTemplateEntity;
  } else {
    return {
      id: siteId,
      name: "My template",
      description: "My template description",
      type: TemplateType.Store,
      backgroundPicture: "https://laknabil.me/background.png",
      title: "E-commerce",
      previewOG:
        "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75",
    } as IStoreTemplateEntity;
  }
}

export async function createSite(
  site: ISiteEntity,
  userId: string
): Promise<ISiteEntity> {
  await delay(1000);
  // todo validte the template data !
  return {
    ...site,
    user: userId,
    template: {
      ...site.template,
      id: "sdsd",
    },
    id: "sdsd",
  };
}



export async function setTemplate(siteId:string,template:IUpdateTemplateEntity):Promise<ITemplateEntity>{

  await delay(1000);
  return {
    ...template,
    id:siteId
  } as ITemplateEntity;

}