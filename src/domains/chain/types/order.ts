import { IClient, ILine, IProduct, ISite, IUser } from "../../../core/types/types";

export interface IOrder {
  id: string;
  client: IClient;
  site: ISite;
  product: IProduct;
  line: ILine;
  price: number;
  date: Date;
  lastUpdate: Date;
  metadata?: any; // for exemple comes from the Referral system
}

export interface IOrderEntity {
  id: string;
  client: string;
  site: string;
  product: string;
  line: string;
  price: number;
  date: Date;
  lastUpdate: Date;
  metadata?: any;
}
