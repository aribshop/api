import { on, onFetch } from "@/events";
import * as LinesRepository from "./repositories/lines";
import * as OrderRepository from "./repositories/order";

export default function setupEvents() {
  onFetch("chain:getSiteFirstLine", async (siteId) => {
    const lines = await LinesRepository.getLines(siteId);
    const line = lines.find((line) => !line.next);

    return line;
  });

  on("chain:pushOrder", async (order) => {
    await OrderRepository.createOrder(order);
    console.log("Order pushed#", order.id);
  });
}
