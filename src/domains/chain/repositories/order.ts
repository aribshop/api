import { IConfirmationEntity } from "../types/chain";
import { IOrderEntity } from "../types/order";
import { OrdersCollection } from "./db";

export async function moveOrder(
  orderId: string,
  confirmation: IConfirmationEntity
): Promise<IOrderEntity> {
  if (confirmation.order !== orderId) {
    throw new Error("order id does not match confirmation order id");
  }
  // todo create new Confirmation
  // todo why we need to return the order?
  return {
    client: "client A",
    id: orderId,
    line: "new line",
    productValue: {
      price: 100,
    },
    product: "sdsd",
    site: "dsdsd",
    date: new Date(),
    lastUpdate: new Date(),
  };
}

export async function getOrders(
  line: string,
  userId: string
): Promise<IOrderEntity[]> {
  // todo use the User ID to get groups
  // todo create another Order type that gives a glimpse of the Product and Site and User
  // todo get confirmations for each order!

  const orders = await OrdersCollection.where("line", "==", line).get();
  return orders.docs.map((doc) => {
    const data = doc.data();

    return {
      ...data,
      lastUpdate: data.lastUpdate.toDate(),
      date: data.date.toDate(),
    } as IOrderEntity;
  });
}

export async function createOrder(order: IOrderEntity): Promise<IOrderEntity> {
  await OrdersCollection.doc(order.id).set(order);

  return order;
}
