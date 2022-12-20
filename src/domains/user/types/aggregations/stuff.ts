import { IUserEntity } from "../users";

export interface IStuffAggregation extends IUserEntity {
  site: string;
  isAdmin: boolean; // one attribute to distinguache between the Admin and Stuff
}
