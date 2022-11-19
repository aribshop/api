import { ILineModel } from "../chain";

export interface IChainAggregation {
  lines: ILineModel[];
  site: string;
  id: string;
  name: string;
  members: number;
}
