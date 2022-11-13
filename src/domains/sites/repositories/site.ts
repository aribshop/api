import { delay } from "../../../core/util";

import { ISiteModel } from "../types/site";
import { ILandingTemplate, IStoreTemplate, ITemplateModel, TemplateType } from "../types/template";


export async function getSite(subname: string): Promise<ISiteModel> {
    await delay(1000);

    return {
        subname,
        id: "sdsd",
        template: TemplateType.Store,
        user: "sdsd",
        description: `My ${subname} site description`,
    }
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
        } as ILandingTemplate;

    } else {
        return {
            id: siteId,
            name: "My template",
            description: "My template description",
            type: TemplateType.Store,
            backgroundPicture: "https://laknabil.me/background.png",
            title: "E-commerce",
        } as IStoreTemplate;
    }
}

