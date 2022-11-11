import { ISite, ITag, IUser } from "../../../core/types/types";

// when the world perfect we can use this
export interface IGroup {
    id: string,
    site: ISite,
    name: string,
    users: IUser[],
    tag: ITag[],
    viewOnly: boolean,
}

export interface IGroupEntity {
    id: string,
    site: string,
    name: string,
}

export interface IGroupModel extends IGroupEntity {
    users: string[],
    tag: string[],
    viewOnly: boolean,
}

export interface INewGroup {
    site: string,
    name: string,
    viewOnly: boolean,
}

