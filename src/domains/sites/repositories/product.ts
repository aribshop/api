import {
  ICustomProductEntity,
  IProductEntity,
  IStandardProductEntity,
} from "../types/product";
import { delay } from "../../../core/util";
import { IProductDetailsAggregation } from "../types/aggregations/productDetails";
import { ProductCollection } from "./db";
import { UnableToUpdateProduct } from "../errors";

export async function getProducts(siteId: string): Promise<IProductEntity[]> {
  const products = await ProductCollection(siteId).get();

  return products.docs.map((doc) => {
    const product = doc.data() as IProductEntity;
    return {
      ...product,
      id: doc.id,
    };
  });
}

export async function getProduct(
  siteId: string,
  productId: string
): Promise<IProductEntity> {
  const doc = await ProductCollection(siteId).doc(productId).get();
  const product = doc.data() as IProductEntity;

  return {
    ...product,
    id: doc.id,
  };
}

export async function createProduct(
  product: IProductEntity,
  siteId: string
): Promise<IProductEntity> {
  const doc = await ProductCollection(siteId).doc(product.id).set(product);

  return {
    ...product,
  };
}

export async function getProductDetails(
  productId: string,
  siteId:string,
): Promise<IProductDetailsAggregation> {
  await delay(1000);
  return {
    product: (await getProducts(siteId))[Math.random() > 0.5 ? 1 : 0],
    link: "https://laknabil.me",
    customers: 10,
  };
}

export async function setProductStatus(
  siteId: string,
  productId: string,
  isPaused: boolean
): Promise<void> {
  try {
    await ProductCollection(siteId).doc(productId).update({
      isPaused,
    });
  } catch (e) {
    throw new UnableToUpdateProduct(siteId, productId);
  }
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
