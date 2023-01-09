export enum TemplateType {
  Landing = "landing",
  Store = "store",
}


// this Entity is the core template, a website never have a direct ITemplateEntity
// this act as a base Entity "Abstraction"
export interface ITemplateEntity {
  name: string;
  previewOG: string; 
  type: TemplateType;
}

export type IUpdateTemplateEntity = Omit<ITemplateEntity, "id"> | ITemplateEntity

export interface ILandingTemplateEntity extends ITemplateEntity {
  title: string;
  backgroundPicture: string;
  profilePicture: string;
  type: TemplateType.Landing;
  sections: ISectionEntity[]; // big issue, when fetching  => hard coded!
}

export interface IStoreTemplateEntity extends ITemplateEntity {
  type: TemplateType.Store;
  title: string;
  backgroundPicture: string;
}

export interface ISectionEntity {
  id: string;
  title: string;
  description: string;
  backgroundPicture: string;
}
