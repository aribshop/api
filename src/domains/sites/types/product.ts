import { IProductMetadata } from "../../../core/types/types";

export interface IProduct {
  id: string;
  metadata: IProductMetadata;
  isCustom: boolean;
}

export interface IProductEntity {
  id: string;
  metadata: IProductMetadataEntity;
  isCustom: boolean;
  isPaused: boolean;
  // todo, what about the siteId, for now, we are implementing subcollection as a solution
}

export interface IProductMetadataEntity {
  name: string;
  description: string;
  tag: string[];
}

export interface IStandardProductEntity extends IProductEntity {
  isCustom: false;
  price: number;
  quantity: number;
  discount: number;
  picture: string;
}

export interface ICustomProductEntity extends IProductEntity {
  isCustom: true;
  form: ICustomProductFormEntity;
  dailyLimit: number; // todo this should enforced by the first line in the chain | the reason for it to be a model, is this is a calculated value! (aggregated)
}

export interface ICustomProductFormEntity {
  version: number;
  lastUpdated: Date;
  fields: ICustomProductFormFieldEntity[];
  //id: string; //TODO this is not needed, the id is the product id 
}

export interface ICustomProductFormFieldEntity {
  name: string;
  type:
    | "text"
    | "number"
    | "date"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea";
  required: boolean;
  options: string[];
  id: string;
}
