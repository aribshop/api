import { IOrder, ISite, IUser } from "../../../core/types/types";
import { IGroup } from "./group";

// ideal world
export interface ILine {
  id: string;
  name: string;
  groups: IGroup[];
  maxQueue: number;
  isPublic: boolean; // public means the queue length is visible
  next?: ILine;
  expiresTime: number;
  confirmations: IConfirmation[];
  site: ISite;
}

type ConfirmationType = "verification";

export interface ILineEntity {
  id: string;
  name: string;
  groups: string[];
  maxQueue: number;
  isPublic: boolean;
  next?: string;
  expiresTime: number;
  site: string;
  confirmations: ConfirmationType[];
}


export interface INewLine {
  name: string;
  maxOrders: number;
  isPublic: boolean;
  next?: string;
  expiresTime: number;
  site: string;
  confirmations: ConfirmationType[]; // todo unknown if this is needed
}

export interface IConfirmation {
  id: string;
  type: ConfirmationType;
  group?: IGroup;
  user?: IUser;
  line: ILine;
  order: IOrder;
  src: string;
  date: Date;
}

export interface IConfirmationEntity {
  id: string;
  type: ConfirmationType;
  group?: string;
  user?: string;
  line: string;
  order: string;
  src?: string;
  date: Date;
}



// todo add Confirmation Note
