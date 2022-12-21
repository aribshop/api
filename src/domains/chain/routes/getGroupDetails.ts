import { Fetch } from "@/events";
import { Router } from "express";
import { getAuthStuff } from "@/firebase";
import { GroupNotFound } from "../errors/lineIsFull";
import * as OrganizeRepository from "../repositories/organize";
import * as LinesRepository from "../repositories/lines";
import { IDetailedGroupAggregation } from "../types/aggregations/detailedGroup";

/**
 * get all groups that belongs to a given user
 */

const router = Router();

export default async function () {
  router.get("/:groupId", async (req, res, next) => {
    const stuff = getAuthStuff(req);

    const { groupId } = req.params;

    const groups = await OrganizeRepository.getGroups(stuff.uid);
    const group = groups.find((group) => group.id === groupId);

    if (!group) {
      return next(new GroupNotFound(groupId, stuff.uid));
    }
    const all_tags = await OrganizeRepository.getTags(stuff.uid);
    const group_tags = all_tags.filter((tag) => group.tags.includes(tag.id));

    const lines = await LinesRepository.getLines(group.site);
    const group_lines = lines.filter((line) => line.groups.includes(group.id));

    const stuffs = await Fetch("users:getStuffsByIds", group.users);

    
    const data: IDetailedGroupAggregation = {
      group,
      lines: group_lines,
      stuff: stuffs,
      tags: group_tags,
    };

    res.json({ success: true, group: data });
  });

  return router;
}
