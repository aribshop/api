import {
  ICustomProductEntity,
  IProductEntity,
  IStandardProductEntity,
} from "../types/product";
import { delay } from "../../../core/util";
import { IProductDetailsAggregation } from "../types/aggregations/productDetails";

export async function getProducts(siteId: string): Promise<IProductEntity[]> {
  await delay(1000);

  // todo for testing purposes, return only one kind of product
  const custom: ICustomProductEntity = {
    id: siteId,
    isPaused: Math.random() > 0.5,
    metadata: {
      name: "My custom product",
      description: "My custom product description",
      tag: ["tag1", "Referral"],
    },
    isCustom: true,
    dailyLimit: 10,
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
        },
      ],
    },
  };

  const standard: IStandardProductEntity = {
    id: "sdsd",
    metadata: {
      name: "My standard product",
      description: "My standard product description",
      tag: ["A/B", "tag2"],
    },
    isCustom: false,
    price: 100,
    isPaused: false,
    quantity: 10,
    discount: 0,
    picture: "https://laknabil.me/background.png",
  };

  return [custom, standard];
}

export async function getProduct(productId: string): Promise<IProductEntity> {
  return (await getProducts(productId))[Math.random() > 0.5 ? 1 : 0];
}

export async function createProduct(
  product: IProductEntity,
  siteId: string
): Promise<IProductEntity> {
  await delay(1000);
  // todo test if the product is valid, specially the custom product
  return {
    ...product,
    id: siteId,
  };
}

export async function getProductDetails(
  productId: string,
): Promise<IProductDetailsAggregation> {
  await delay(1000);
  return {
    product: (await getProducts("ss"))[Math.random() > 0.5 ? 1 : 0],
    link: "https://laknabil.me",
    customers: 10,
  };
}

export async function setProductStatus(
  productId: string,
  isPaused: boolean
): Promise<void> {
  await delay(1000);
  // todo set the product status
}

// todo this should be part of Inventory Domain/Repository!
export async function addQuantityToProduct(
  productId: string,
  quantity: number
): Promise<void> {
  await delay(1000);
  // todo add quantity to the product
}

export async function deleteProduct(productId: string): Promise<void> {
  await delay(1000);
  // todo delete the product
}
