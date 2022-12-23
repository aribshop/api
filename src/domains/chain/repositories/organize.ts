import { firestore } from "firebase-admin";
import { delay } from "../../../core/util";
import { ILineEntity } from "../types/chain";
import { IGroupEntity, INewGroup } from "../types/group";
import { ITagEntity, INewTag } from "../types/tag";
import { GroupsCollection, LinesCollection, TagsCollections } from "./db";

export async function addUserToGroup(user: string, groupId: string) {
  await GroupsCollection.doc(groupId).update({
    users: firestore.FieldValue.arrayUnion(user),
  });
}

export async function addTagToGroup(tag: string, groupId: string) {
  await GroupsCollection.doc(groupId).update({
    tags: firestore.FieldValue.arrayUnion(tag),
  });
}

export async function createGroup(
  group: INewGroup,
  userId: string
): Promise<IGroupEntity> {
  // todo check if the userId is the owner of the site

  const doc = await GroupsCollection.add({
    site: group.site,
    name: group.name,
    users: [userId],
    tags: [],
    viewOnly: group.viewOnly,
  });

  return {
    id: doc.id,
    ...group,
    users: [userId],
    tags: [],
  };
}

export async function createTag(tag: INewTag): Promise<ITagEntity> {
  const doc = await TagsCollections.add({
    ...tag,
  });

  return {
    ...tag,
    id: doc.id,
  };
}

export async function addGroupToLine(
  lineId: string,
  groupId: string
):Promise<void> {
  await LinesCollection.doc(lineId).update({
    groups: firestore.FieldValue.arrayUnion(groupId),
  });

}

export async function getTags(websiteId: string): Promise<ITagEntity[]> {
  const query = await TagsCollections.where("site", "==", websiteId).get();

  return query.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ITagEntity[];
}

export async function getGroups(userId: string): Promise<IGroupEntity[]> {
  const query = await GroupsCollection.where(
    "users",
    "array-contains",
    userId
  ).get();

  return query.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as IGroupEntity[];
}
