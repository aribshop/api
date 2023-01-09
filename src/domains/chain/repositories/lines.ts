import { delay } from "../../../core/util";
import { IChainAggregation } from "../types/aggregations/chain";
import { IUnConfirmedAggregation } from "../types/aggregations/unconfirmed";
import { IConfirmationEntity, ILineEntity, INewLine } from "../types/chain";
import { IOrderEntity } from "../types/order";
import {
  ConfirmationsCollection,
  LinesCollection,
  OrdersCollection,
} from "./db";
import { getGroups, getTags } from "./organize"; // todo i don't know if this is an antipattren

export async function getChain(
  userId: string,
  siteId: string,
  isAdmin: boolean
): Promise<IChainAggregation> {
  // todo this cost 3 queries, we can optimize it to 1 query
  const allUserGroups = await getGroups(userId);
  const groups = allUserGroups.filter((g) => g.site == siteId);

  const usersCount = groups.reduce((acc, group) => {
    group.users.forEach((user) => acc.add(user));
    return acc;
  }, new Set<string>()).size;

  const allLines = await getLines(siteId);
  const allTags = await getTags(siteId);

  const userLines = allLines.filter((line) => {
    return line.groups.some((groupId) => {
      return groups.some((group) => group.id === groupId);
    });
  });

  const userTags = allTags.filter((tag) => {
    return groups.some((g) => g.tags.includes(tag.id));
  });

  return {
    name: "Production Chain",
    site: siteId,
    lines: isAdmin ? allLines : userLines,
    groups,
    openOrders: 0,
    tags: isAdmin ? allTags : userTags,
    members: usersCount,
  };
}

export async function getLines(siteId: string): Promise<ILineEntity[]> {
  const lines = await LinesCollection.where("site", "==", siteId).get();

  return lines.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as ILineEntity;
  });
}

export async function getPublicLines(siteId: string): Promise<ILineEntity[]> {
  await delay(1000);
  // todo get the number of orders in each line
  // todo public line is a standalone type!
  return [
    {
      id: "1",
      name: "line 1",
      isPublic: true,
      expiresTime: 1500,
      maxQueue: 10,
      groups: [],
      confirmations: [],
      site: "123",
    },
    {
      id: "2",
      name: "line 2",
      isPublic: true,
      expiresTime: 1500,
      maxQueue: 10,
      groups: [],
      confirmations: [],
      site: "123",
    },
    {
      id: "3",
      name: "line 3",
      isPublic: true,
      expiresTime: 1500,
      maxQueue: 10,
      groups: [],
      confirmations: [],
      site: "123",
    },
    {
      id: "4",
      name: "line 4",
      isPublic: true,
      expiresTime: 1500,
      maxQueue: 10,
      groups: [],
      confirmations: [],
      site: "123",
    },
  ];
}

export async function getConfirmedConfirmations(
  orderID: string
): Promise<IConfirmationEntity[]> {
  const docs = await ConfirmationsCollection.where(
    "order",
    "==",
    orderID
  ).get();

  return docs.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      date: data.date.toDate(),
    } as IConfirmationEntity;
  });
}

// scoped to one line!
export async function getUnconfirmedConfirmations(
  orderId: string
): Promise<IUnConfirmedAggregation> {
  // todo this is very read heavy function!
  const order = (
    await OrdersCollection.doc(orderId).get()
  ).data() as IOrderEntity;

  const docs = await ConfirmationsCollection.where(
    "order",
    "==",
    orderId
  ).get();

  const confirmations = docs.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      date: data.date.toDate(),
    } as IConfirmationEntity;
  });

  const line = (
    await LinesCollection.doc(order.line).get()
  ).data() as ILineEntity;

  return {
    confirmationTypes: line.confirmations.filter((e) =>
      confirmations.every((c) => c.type !== e)
    ),
    currentLine: order.line,
    nextLine: line.next,
    orderId: orderId,
    title: "random Product", // todo the order product name, it's a refetch, the frontend is already aware of the product name
  };
}

// create new line
export async function createLine(line: INewLine): Promise<ILineEntity> {
  const newLine = {
    name: line.name,
    isPublic: false,
    next: line.next ?? null,
    expiresTime: line.expiresTime,
    maxQueue: line.maxOrders,
    groups: [],
    confirmations: line.confirmations,
    site: line.site,
  };

  const doc = await LinesCollection.add(newLine);

  return { ...newLine, id: doc.id, next: line.next };
}
