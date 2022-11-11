import { IConfirmation, ISite } from "../../../core/types/types";
import { IGroup } from "./group";


// ideal world
export interface ILine {
    id: string,
    name: string,
    groups: IGroup[],
    maxOrders: number,
    isPublic: boolean,
    next?: ILine,
    expiresTime: number,
    confirmations: IConfirmation[],
    site: ISite
}

export interface ILineModel {
    id: string,
    name: string,
    groups: string[], // todo i think this should be a list of group models
    maxOrders: number,
    isPublic: boolean,
    next?: string,
    expiresTime: number,
    site: string,
    confirmations: string[], // todo i think this should be a list of confirmation models
}

export interface ILineEntity {
    name: string,
    groups: string[],
    maxOrders: number,
    isPublic: boolean,
    next?: string,
    expiresTime: number,
    confirmations: string[],
    site: string
}

export interface INewLine {
    name: string,
    maxOrders: number,
    isPublic: boolean,
    next?: string,
    expiresTime: number,
    site: string
    // confirmations: string[], // todo unknown if this is needed
}
