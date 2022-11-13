import { IProductMetadata } from "../../../core/types/types";

export interface IProduct {
    id: string,
    metadata: IProductMetadata,
    isCustom: boolean,
}



export interface IProductModel {
    id: string,
    metadata: IProductMetadataEntity,
    isCustom: boolean,
}

export interface IProductMetadataEntity {
    name: string,
    description: string,
    tag: string[],
}

export interface IStandardProductEntity {
    price: number,
    quantity: number,
    discount: number,
    picture: string,
}

// FIXME don't use this pattern, duplicate code is way better than this
export interface IStandardProductModel extends IProductModel, IStandardProductEntity {
    isCustom: false,
}

export interface ICustomProductModel extends IProductModel {
    isCustom: true,
    form: ICustomProductFormModel,
}

export interface ICustomProductFormModel {
    id: string,
    version: number,
    lastUpdated: Date,
    fields: ICustomProductFormFieldModel[],
}


export interface ICustomProductFormFieldEntity {
    name: string,
    type: "text" | "number" | "date" | "select" | "checkbox" | "radio" | "textarea",
    required: boolean,
    options: string[],
}

export interface ICustomProductFormFieldModel extends ICustomProductFormFieldEntity {
    id: string,

}
