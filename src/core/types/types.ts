

export interface ISite {
    id: string,
    user: IUser,
    template: ITemplate,
    products: IProduct[],
    description: string,

}

export interface IUser {
    id: string,
    name: string,
    email: string,
    phone: string,
    groups: IGroup[],
    type: "user" | "admin" | "client", // todo what is the difference between user and client?
}


export interface IClient {
    id: string,
    name: string,
    email?: string,
    phone: string,
}


export interface IGroup {
    id: string,
    site: ISite,
    name: string,
    users: IUser[],
    tag: ITag[],
    viewOnly: boolean,
}

export interface ITag {
    id: string,
    name: string,
}

export interface ITemplate {
    id: string,
    name: string,
    description: string,
    type: "landing" | "store",
}

export interface IProduct {
    id: string,
    metadata: IProductMetadata,
}

export interface ICustomProduct extends IProduct {
    isCustom: true,
    priorities: ICustomProductPriority[],
    form: ICustomProductForm,
}

export interface ICustomProductForm {
    id: string,
    version: number,
    lastUpdated: Date,
    fields: ICustomProductFormField[],
}

export interface ICustomProductFormField {
    id: string,
    name: string,
    type: "text" | "number" | "date" | "select" | "checkbox" | "radio" | "textarea",
    required: boolean,
    options: string[],
}

export interface ICustomProductPriority {
    id: string,
    name: string,
    description: string,
    fieldId: string,
    priority: number,
}





export interface IProductMetadata {
    name: string,
    description: string,
}

export interface IOrder {
    id: string,
    user: IUser,
    site: ISite,
    product: IProduct,
    line: ILine,
    status: "pending" | "processing" | "completed" | "cancelled" | "expired",
    price: number,
}

export interface ILine {
    id: string,
    name: string,
    groups: IGroup[],
    maxOrders: number,
    isPublic: boolean,
    next?: ILine,
    expiresTime: number,
    confirmations: IConfirmation[],
}

export interface IConfirmation {
    id: string,
    type: "email" | "sms" | "phone" | "QR" | "payment" | "verification" | "file",
    group?: IGroup,
    user?: IUser,
    line: ILine,
    order: IOrder,
    src: string,
}



