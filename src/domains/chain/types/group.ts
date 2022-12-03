import { ISite, ITag, IUser } from "../../../core/types/types";

// when the world perfect we can use this
export interface IGroup {
  id: string;
  site: ISite;
  name: string;
  users: IUser[];
  tags: ITag[]; // here the group means a cell in table of (line*tag)
  viewOnly: boolean;
}

export interface IGroupEntity {
  site: string;
  name: string;
  users: string[];
  tags: string[];
  viewOnly: boolean;
  id: string;
}


// let's make the group creation process goes into two steps, creating the group then attaching the tags, users
// the question becomes why the group contains tags and users, and not the lines!

export interface INewGroup {
  site: string;
  name: string;
  viewOnly: boolean;
}
