import { IUserEntity } from "../users";

export interface IStuffAggregation {
  user: IUserEntity;

  groups: string[];
  site: string;
  isAdmin: boolean; // one attribute to distinguache between the Admin and Stuff
}
