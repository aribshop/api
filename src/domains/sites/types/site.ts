import { ICustomProduct, IProduct, ITemplate, IUser } from "../../../core/types/types";
import { ITemplateModel, TemplateType } from "./template";

export interface ISite {
    id: string,
    user: IUser,
    template: ITemplate,
    products: (IProduct | ICustomProduct)[], // can't be implimented yet, one api = one respossibility
    description: string,
}

export interface ISiteModel {
    id: string,
    user: string,
    template: ITemplateModel,
    subname: string,
    description: string,
}

export interface ISiteEntity {
    template: ITemplateEntity, // FIXME for now the api for creating new website will force the template, but this goes against the idea of one API one Task. you know `preview`
    subname: string,
    description: string,
}