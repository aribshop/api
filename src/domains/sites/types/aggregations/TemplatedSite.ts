import { ISiteEntity } from "../site";
import { ITemplateEntity } from "../template";

export interface ITemplatedSiteAggregation extends ISiteEntity {
  template: ITemplateEntity;
}
