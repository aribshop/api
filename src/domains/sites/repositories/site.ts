import { delay } from "../../../core/util";

import { ISiteEntity } from "../types/site";
import {
  ILandingTemplateEntity,
  IStoreTemplateEntity,
  ITemplateEntity,
  TemplateType,
} from "../types/template";

export async function getSite(subname: string): Promise<ISiteEntity> {
  await delay(1000);

  return {
    subname,
    id: "sdsd",
    description: "sdsd",
    user: "sdsd",
    template: {
      // the generic TemplateModel
      id: "sdsd",
      type: TemplateType.Landing,
      name: "Landing",
      description: "Landing template",
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
