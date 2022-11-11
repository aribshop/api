import { ILine, IProduct, ISite, IUser } from "../../../core/types/types";

export interface IOrder {
    id: string,
    user: IUser,
    site: ISite,
    product: IProduct,
    line: ILine,
    status: "pending" | "processing" | "completed" | "cancelled" | "expired",
    price: number,
}

export interface IOrderModel {
    id: string,
    user: string,
    site: string,
    product: string,
    line: string,
    status: "pending" | "processing" | "completed" | "cancelled" | "expired",
    price: number,
}



export interface IOrderEntity {
    id: string,
    user: string,
    site: string,
    product: string,
    price: number,
}