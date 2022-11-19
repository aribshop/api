import { ILine, IProduct, ISite, IUser } from "../../../core/types/types";

export interface IOrder {
  id: string;
  user: IUser; // todo not user but a client!!!
  site: ISite;
  product: IProduct;
  line: ILine;
  price: number;
  date: Date;
  lastUpdate: Date;
}

export interface IOrderModel {
  id: string;
  user: string;
  site: string;
  product: string;
  line: string;
  price: number;
  date: Date;
  lastUpdate: Date;
}

export interface IOrderEntity {
  user: string;
  site: string;
  product: string;
  price: number;
  date: Date;
  lastUpdate: Date;
}
