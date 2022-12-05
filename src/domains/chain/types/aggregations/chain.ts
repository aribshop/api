import { ILineEntity } from "../chain";

export interface IChainAggregation {
  lines: ILineEntity[];
  site: string;
  id: string;
  name: string;
  members: number; // todo rename it as OpenOrders and subscribe to it RTDB
}
