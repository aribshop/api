import { IStuffAggregation } from "@/domains/user/types/aggregations/stuff";
import { ILineEntity } from "../chain";
import {  IGroupEntity } from "../group";
import { ITagEntity } from "../tag";

export interface IDetailedGroupAggregation {
  group: IGroupEntity;
  lines: ILineEntity[];
  stuff: IStuffAggregation[];
  tags: ITagEntity[];
}
