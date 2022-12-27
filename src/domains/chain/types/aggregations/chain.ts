import { ILineEntity } from "../chain";
import { IGroupEntity } from "../group";
import { ITagEntity } from "../tag";

export interface IChainAggregation {
  lines: ILineEntity[];
  site: string;
  name: string; // what is this?
  groups: IGroupEntity[];
  tags: ITagEntity[];
  openOrders: number; // todo subscribe to it RTDB
  members?: number;
}
