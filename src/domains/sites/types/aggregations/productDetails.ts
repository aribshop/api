import { IProductEntity } from "../product";

export interface IProductDetailsAggregation {
  product: IProductEntity;
  link: string;
  customers: number;
}



