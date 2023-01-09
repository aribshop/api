import { toDBDate } from "@/repository/database";
import { OrderIsFinishedError } from "../errors";
import { IConfirmationEntity, ILineEntity } from "../types/chain";
import { IOrderEntity } from "../types/order";
import {
  ConfirmationsCollection,
  LinesCollection,
  OrdersCollection,
} from "./db";

export async function confirmOrder(
  orderId: string,
  confirmation: IConfirmationEntity
): Promise<void> {
  if (confirmation.order !== orderId) {
    throw new Error("order id does not match confirmation order id");
  }

  await ConfirmationsCollection.doc(confirmation.id).set({
    ...confirmation,
    date: toDBDate(confirmation.date),
  });
}

export async function moveOrderToNextLine(
  orderId: string,
  confirmation: IConfirmationEntity
): Promise<void> {
  if (confirmation.order !== orderId) {
    throw new Error("order id does not match confirmation order id");
  }

  const line = await LinesCollection.doc(confirmation.line).get(); // todo i don't know if we should work with lines data here, and not in the lines respository
  const data = line.data() as ILineEntity;

  if (!data.next) {
    await OrdersCollection.doc(orderId).update({
      line: data.next,
    });
  } else throw new OrderIsFinishedError(orderId);
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
