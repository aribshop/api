import { toDate } from "@/repository/database";
import { IConfirmationEntity } from "../types/chain";
import { IOrderEntity } from "../types/order";
import { ConfirmationsCollection, OrdersCollection } from "./db";

export async function moveOrder(
  orderId: string,
  confirmation: IConfirmationEntity
): Promise<void> {
  if (confirmation.order !== orderId) {
    throw new Error("order id does not match confirmation order id");
  }

  await ConfirmationsCollection.doc(confirmation.id).set({
    ...confirmation,
    date: toDate(confirmation.date),
  });
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
