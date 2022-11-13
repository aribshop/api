export enum TemplateType {
    Landing = "landing",
    Store = "store",
}

export interface ITemplateModel {
    id: string,
    name: string,
    description: string,
    type: TemplateType,
}


export interface ILandingTemplate extends ITemplateModel {
    type: TemplateType.Landing,
    sections: ISection[],
    title: string,
    backgroundPicture: string,
    profilePicture: string,
}

export interface IStoreTemplate extends ITemplateModel {
    type: TemplateType.Store,
    title: string,
    backgroundPicture: string,
}


export interface ISection {
    id: string,
    title: string,
    description: string,
    backgroundPicture: string,
}
