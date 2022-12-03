export enum TemplateType {
  Landing = "landing",
  Store = "store",
}

export interface ITemplateEntity {
  id: string;
  name: string;
  description: string;
  type: TemplateType;
}

export interface ILandingTemplateEntity extends ITemplateEntity {
  title: string;
  backgroundPicture: string;
  profilePicture: string;
  type: TemplateType.Landing;
  sections: ISectionEntity[]; // FIXME big issue, when fetching the
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
