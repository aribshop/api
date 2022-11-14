import { delay } from "../../../core/util";

import { ISiteEntity, ISiteModel } from "../types/site";
import { ILandingTemplateModel, IStoreTemplateModel, ITemplateModel, TemplateType } from "../types/template";


export async function getSite(subname: string): Promise<ISiteModel> {
    await delay(1000);

    return {
        subname,
        id: "sdsd",
        description: "sdsd",
        user: "sdsd",
        template: { // the generic TemplateModel
            id: "sdsd",
            type: TemplateType.Landing,
            name: "Landing",
            description: "Landing template",
        }
    } as ISiteModel;
}

export async function getTemplate(siteId: string): Promise<ITemplateModel> {
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
                }
            ]
        } as ILandingTemplateModel;

    } else {
        return {
            id: siteId,
            name: "My template",
            description: "My template description",
            type: TemplateType.Store,
            backgroundPicture: "https://laknabil.me/background.png",
            title: "E-commerce",
        } as IStoreTemplateModel;
    }
}



export async function createSite(site: ISiteEntity, userId: string): Promise<ISiteModel> {
    await delay(1000);
    // todo validte the template data !
    return {
        ...site,
        user: userId,
        template: {
            id: "sdsd",
            ...site.template,
        },
        id: "sdsd",

    };

}
