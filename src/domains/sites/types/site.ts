import {
  ICustomProduct,
  IProduct,
  ITemplate,
  IUser,
} from "../../../core/types/types";
import { ITemplateEntity } from "./template";

export interface ISite {
  id: string;
  user: IUser;
  template: ITemplate;
  products: (IProduct | ICustomProduct)[]; // can't be implimented yet, one api = one respossibility
  description: string;
}


// todo add agregated information about the first line ...
export interface ISiteEntity {
  user: string;
  subname: string;
  description: string;
  name: string;
}
