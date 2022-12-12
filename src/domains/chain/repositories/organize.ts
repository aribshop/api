import { delay } from "../../../core/util";
import { ILineEntity } from "../types/chain";
import { IGroupEntity, INewGroup } from "../types/group";
import { ITagEntity, INewTag } from "../types/tag";

export async function addUserToGroup(user: string, groupId: string) {
  await delay(1000);
}

export async function addTagToGroup(tag: string, groupId: string) {
  await delay(1000);
}

export async function createGroup(group: INewGroup): Promise<IGroupEntity> {
  await delay(1000);

  return {
    id: "123",
    site: group.site,
    name: group.name,
    users: [],
    tags: [],
    viewOnly: group.viewOnly,
  };
}

export async function createTag(tag: INewTag): Promise<ITagEntity> {
  await delay(1000);

  return {
    id: "123",
    name: tag.name,
    description: tag.description,
  };
}

export async function addGroupToLine(
  lineId: string,
  groupId: string
): Promise<ILineEntity> {
  await delay(1000);

  return {
    id: lineId,
    name: "line 1",
    isPublic: true,
    expiresTime: 1500,
    maxQueue: 10,
    groups: [groupId],
    confirmations: [],
    site: "123",
  };
}

export async function getTags(websiteId: string): Promise<ITagEntity[]> {
  await delay(1000);

  return [
    {
      id: "1",
      name: "Store 1",
      description: "Ain Benain",
    },
    {
      id: "2",
      name: "Store 2",
      description: "Charaga",
    },
    {
      id: "3",
      name: "Store 3",
      description: "Zeralda",
    },
  ];
}

export async function getGroups(userId: string): Promise<IGroupEntity[]> {
  // todo the admin (website owner) is within all groups
  await delay(1000);

  return [
    {
      id: "1",
      name: "Developeurs",
      users: [userId],
      tags: [],
      viewOnly: false,
      site: "123",
    },
    {
      id: "2",
      name: "Marketing",
      users: [userId, "123"],
      tags: [],
      viewOnly: true,
      site: "123",
    },
    {
      id: "3",
      name: "commercial",
      users: [userId],
      tags: [],
      viewOnly: false,
      site: "123",
    },
  ];
}
