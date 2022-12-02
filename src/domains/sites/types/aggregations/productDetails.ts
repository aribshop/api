import { IProductModel } from "../product";

export interface IProductDetailsAggregation {
  product: IProductModel;
  link: string;
  customers: number;
}



