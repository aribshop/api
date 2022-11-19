import { IConfirmationEntity } from "../types/chain";
import { IOrderEntity, IOrderModel } from "../types/order";

export async function moveOrder(
  order: IOrderModel,
  confirmation: IConfirmationEntity
): Promise<IOrderModel> {
  if (confirmation.order !== order.id) {
    throw new Error("order id does not match confirmation order id");
  }
// todo create new Confirmation
// todo why we need to return the order?
  return {
    user: order.user,
    id: order.id,
    line: "new line",
    price: order.price,
    product: order.product,
    site: order.site,
    date: order.date,
    lastUpdate: new Date(),
  };
}

export async function getOrders(
  line: string,
  userId: string
): Promise<IOrderModel[]> {
  // todo use the User ID to get groups
  // todo create another Order type that gives a glimpse of the Product and Site and User
  // todo get confirmations for each order!
  return [
    {
      user: "Lakrib Nabil",
      id: "id",
      line: "1",
      price: 1,
      product: "product",
      site: "site",
      date: new Date(),
      lastUpdate: new Date(),
    },
    {
      user: "Nabil Droid",
      id: "idedze",
      line: "2",
      price: 15,
      product: "product",
      site: "site",
      date: new Date(),
      lastUpdate: new Date(),
    },
  ];
}
