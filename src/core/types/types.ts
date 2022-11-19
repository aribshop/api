export interface ISite {
  id: string;
  user: IUser;
  template: ITemplate;
  products: (IProduct | ICustomProduct)[];
  description: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  groups: IGroup[];
  type: "user" | "admin" | "client"; // todo what is the difference between user and client?
}

// todo use IClient instead of IUser
export interface IClient {
  id: string;
  name: string;
  email?: string;
  phone: string;
}

export interface IGroup {
  id: string;
  site: ISite;
  name: string;
  users: IUser[];
  tag: ITag[];
  viewOnly: boolean;
}

export interface ITag {
  id: string;
  name: string;
}

export interface ITemplate {
  id: string;
  name: string;
  description: string;
  type: "landing" | "store";
}

/*
    // todo templates problem
    templates are used to create sites
    we have for now two types of templates
    the probelm is how to store those templates in Relation DB
    and what about multiple sections in one template?

    // FIXME for now, one table = one kind of template, multiple sections? well a section table for one kind of template. ship fast, remember? 
*/

export interface ILandingTemplate extends ITemplate {
  type: "landing";
  sections: ISection[];
  title: string;
  backgroundPicture: string;
  profilePicture: string;
}

export interface IStoreTemplate extends ITemplate {
  type: "store";
  title: string;
  backgroundPicture: string;
}

export interface ISection {
  id: string;
  title: string;
  description: string;
  backgroundPicture: string;
}

/**
 * for now there are two types of products, custom and standard
 */

export interface IProduct {
  id: string;
  metadata: IProductMetadata;
  isCustom: boolean;
}

// FIXME Metadata ?? what is this? LOL, probably its the shared data between all kind of products
export interface IProductMetadata {
  name: string;
  description: string;
  tag: string[];
}

export interface IStandardProduct extends IProduct {
  isCustom: false;
  price: number;
  quantity: number;
  discount: number;
  picture: string;
}

export interface ICustomProduct extends IProduct {
  isCustom: true;
  // priorities: ICustomProductPriority[],
  form: ICustomProductForm;
}

export interface ICustomProductForm {
  id: string;
  version: number;
  lastUpdated: Date;
  fields: ICustomProductFormField[];
}

export interface ICustomProductFormField {
  id: string;
  name: string;
  type:
    | "text"
    | "number"
    | "date"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea";
  required: boolean;
  options: string[];
}

// todo implement Product Priority
export interface ICustomProductPriority {
  id: string;
  name: string;
  description: string;
  fieldId: string;
  priority: number;
}

export interface IOrder {
  id: string;
  user: IUser;
  site: ISite;
  product: IProduct;
  line: ILine;
  price: number;
  date: Date;
  lastUpdate: Date;
}

export interface ILine {
  id: string;
  name: string;
  groups: IGroup[];
  maxOrders: number;
  isPublic: boolean;
  next?: ILine;
  expiresTime: number;
  confirmations: IConfirmation[];
}

export interface IConfirmation {
  id: string;
  type: "email" | "sms" | "phone" | "QR" | "payment" | "verification" | "file";
  group?: IGroup;
  user?: IUser;
  line: ILine;
  order: IOrder;
  src: string;
}
