import { IConfirmationEntity } from "../types/chain";
import { IOrderEntity } from "../types/order";

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
	return [
		{
			client: "Lakrib Nabil",
			id: "id",
			line: "1",
			productValue: {
				fields: [
					{
						id: "sdsd",
						name: "My field Three",
						value: "value one of something",
					},
					{
						id: "sdsd",
						name: "My field two",
						value: "Hello World if you are reading this, you are awesome",
					},
				],
			},
			product: "product",
			site: "site",
			date: new Date(),
			lastUpdate: new Date(),
		},
		{
			client: "Nabil Droid",
			id: "idedze",
			line: "2",
			productValue: {
				price: 12,
				discount: String,
			},
			product: "product",
			site: "site",
			date: new Date(),
			lastUpdate: new Date(),
		},
	];
}
