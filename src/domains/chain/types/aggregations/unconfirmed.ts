import { ConfirmationType } from "../chain";


// scoped to one line!
// todo use a better name to reflect the fact that it depend on the current line!
export type IUnConfirmedAggregation= {
	orderId: string;
	confirmationTypes: ConfirmationType[];
	nextLine?: string;
	currentLine: string;
	title:string,// todo the order product name, it's a refetch, the frontend is already aware of the product name
};
