import { IProductMetadata } from "../../../core/types/types";

export interface IProduct {
    id: string,
    metadata: IProductMetadata,
    isCustom: boolean,
}




export interface IProductModel extends IProductEntity {
    id: string,
}
export interface IProductEntity {
    metadata: IProductMetadataEntity,
    isCustom: boolean,
}

export interface IProductMetadataEntity {
    name: string,
    description: string,
    tag: string[],
}

export interface IStandardProductEntity extends IProductEntity {
    isCustom: false,
    price: number,
    quantity: number,
    discount: number,
    picture: string,
}

// FIXME don't use this pattern, duplicate code is way better than this
export interface IStandardProductModel extends IProductModel, IStandardProductEntity {
    isCustom: false,
}



export interface ICustomProductEntity extends IProductEntity {
    isCustom: true,
    form: ICustomProductFormEntity,
}

export interface ICustomProductModel extends IProductModel {
    isCustom: true,
    form: ICustomProductFormModel,
}



export interface ICustomProductFormEntity {
    version: number,
    lastUpdated: Date,
    fields: ICustomProductFormFieldEntity[],
}

export interface ICustomProductFormModel extends ICustomProductFormEntity {
    id: string,
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
