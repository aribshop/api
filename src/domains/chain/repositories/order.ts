import { IConfirmationEntity } from "../types/chain";
import { IOrderEntity, IOrderModel } from "../types/order";


export async function moveOrder(order: IOrderEntity, confirmation: IConfirmationEntity): Promise<IOrderModel> {

    if (confirmation.order !== order.id) {
        throw new Error("order id does not match confirmation order id");
    }
    

}
