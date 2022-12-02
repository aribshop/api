import { delay } from "../../../core/util";
import { ILineModel } from "../types/chain";
import { IGroupEntity, IGroupModel, INewGroup } from "../types/group";
import { ITagModel, INewTag } from "../types/tag";

export async function addUserToGroup(user: string, group: IGroupEntity) {
  await delay(1000);
}

export async function addTagToGroup(tag: string, group: IGroupEntity) {
  await delay(1000);
}

export async function createGroup(group: INewGroup): Promise<IGroupModel> {
  await delay(1000);

  return {
    id: "123",
    site: group.site,
    name: group.name,
    users: [],
    tag: [],
    viewOnly: group.viewOnly,
  };
}

export async function createTag(tag: INewTag): Promise<ITagModel> {
  await delay(1000);

  return {
    id: "123",
    name: tag.name,
    description: "",
  };
}

export async function addGroupToLine(
  lineId: string,
  group: IGroupEntity
): Promise<ILineModel> {
  await delay(1000);

  return {
    id: lineId,
    name: "line 1",
    isPublic: true,
    expiresTime: 1500,
    maxOrders: 10,
    groups: [group.id],
    confirmations: [],
    site: "123",
  };
}

export async function getTags(websiteId: string): Promise<ITagModel[]> {
  await delay(1000);

  return [
    {
      id: "1",
      name: "Store 1",
      description:"Ain Benain",
    },
    {
      id: "2",
      name: "Store 2",
      description:"Charaga",
    },
    {
      id: "3",
      name: "Store 3",
      description:"Zeralda",
    },
  ];
}

export async function getGroups(userId: string): Promise<IGroupModel[]> {
  // todo the admin (website owner) is within all groups
  await delay(1000);

  return [
    {
      id: "1",
      name: "Developeurs",
      users: [userId],
      tag: [],
      viewOnly: false,
      site: "123",
    },
    {
      id: "2",
      name: "Marketing",
      users: [userId,"123"],
      tag: [],
      viewOnly: true,
      site: "123",
    },
    {
      id: "3",
      name: "commercial",
      users: [userId],
      tag: [],
      viewOnly: false,
      site: "123",
    },
  ];
}
