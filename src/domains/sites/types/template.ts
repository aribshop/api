export enum TemplateType {
    Landing = "landing",
    Store = "store",
}



export interface ITemplateEntity {
    name: string,
    description: string,
    type: TemplateType,
}



export interface ITemplateModel extends ITemplateEntity {
    id: string,
}


export interface ILandingTemplateEntity extends ITemplateEntity {
    type: TemplateType.Landing,
    sections: ISectionEntity[],
    title: string,
    backgroundPicture: string,
    profilePicture: string,
}

export interface ILandingTemplateModel extends ILandingTemplateEntity, ITemplateModel {
    type: TemplateType.Landing,
    sections: ISection[], // FIXME big issue, when fetching the 
}



export interface IStoreTemplateEntity extends ITemplateEntity {
    type: TemplateType.Store,
    title: string,
    backgroundPicture: string,
}


export interface IStoreTemplateModel extends IStoreTemplateEntity, ITemplateModel {
    type: TemplateType.Store,
    id: string,
}

export interface ISectionEntity {
    title: string,
    description: string,
    backgroundPicture: string,
}

export interface ISection extends ISectionEntity {
    id: string,

}
