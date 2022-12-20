import {
	IClient,
	ILine,
	IProduct,
	ISite,
	IUser,
} from "../../../core/types/types";

export interface IOrder {
	id: string;
	client: IClient;
	site: ISite;
	product: IProduct;
	line: ILine;
  productValue: any; // for the custom product, this is the value of the form, for the standard product, this is the price

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
	productValue: any; // for the custom product, this is the value of the form, for the standard product, this is the price, // todo for now let's don't worry about the type, later on we need the type, and probabely this too, is an aggregation!
	date: Date;
	lastUpdate: Date;
	metadata?: any;
}