import { IStuffAggregation } from "@/domains/user/types/aggregations/stuff";
import { ILineEntity } from "../chain";
import { IGroup } from "../group";
import { ITagEntity } from "../tag";

export interface DetailedGroupAggregation {
  group: IGroup;
  lines: ILineEntity[];
  stuff: IStuffAggregation[];
  tags: ITagEntity[];
}
