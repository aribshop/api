import { IConfirmationEntity } from "../types/chain";
import { IOrderEntity, IOrderModel } from "../types/order";


export async function moveOrder(order: IOrderEntity, confirmation: IConfirmationEntity): Promise<IOrderModel> {

    if (confirmation.order !== order.id) {
        throw new Error("order id does not match confirmation order id");
    }

    return {
        user: order.user,
        id: order.id,
        line: "new line",
        price: order.price,
        product: order.product,
        site: order.site,
        status: "pending", // todo status of order, it is necessary, and what about the last line, i think status should be associated with confirmation
    }
}

export async function getOrders(line: string, userId: string): Promise<IOrderModel[]> {
    // todo use the User ID to get groups
    // todo create another Order type that gives a glimpse of the Product and Site and User
    // todo get confirmations for each order!
    return [{
        user: "Lakrib Nabil",
        id: "id",
        line: "1",
        price: 1,
        product: "product",
        site: "site",
        status: "pending",
    },
    {
        user: "Nabil Droid",
        id: "idedze",
        line: "2",
        price: 15,
        product: "product",
        site: "site",
        status: "pending",
    }];
}