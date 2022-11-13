import { ICustomProductModel, IProductModel, IStandardProductModel } from "../types/product";
import { delay } from "../../../core/util";

export async function getProducts(siteId: string): Promise<IProductModel[]> {

    await delay(1000);

    // todo for testing purposes, return only one kind of product
    const custom: ICustomProductModel = {
        id: siteId,
        metadata: {
            name: "My custom product",
            description: "My custom product description",
            tag: ["tag1", "tag2"],
        },
        isCustom: true,
        form: {
            id: "sdsd",
            version: 1,
            lastUpdated: new Date(),
            fields: [
                {
                    id: "sdsd",
                    name: "My field",
                    type: "text",
                    required: true,
                    options: [],
                }
            ]
        }
    }

    const standard: IStandardProductModel = {
        id: "sdsd",
        metadata: {
            name: "My standard product",
            description: "My standard product description",
            tag: ["tag1", "tag2"],
        },
        isCustom: false,
        price: 100,
        quantity: 10,
        discount: 0,
        picture: "https://laknabil.me/nabil.png",
    }


    return [custom, standard];

}
