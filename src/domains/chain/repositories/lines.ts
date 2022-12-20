import { delay } from "../../../core/util";
import { IChainAggregation } from "../types/aggregations/chain";
import { IUnConfirmedAggregation } from "../types/aggregations/unconfirmed";
import { IConfirmationEntity, ILineEntity, INewLine } from "../types/chain";
import { LinesCollection } from "./db";

export async function getChain(userId: string,siteId:string): Promise<IChainAggregation> {
  return {
    id: "123",
    name: "chain 1",
    site: "123",
    members: Math.floor(Math.random() * 100),
    lines: await getLines(siteId),
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
  await delay(1000);

  return [
    {
      id: "1",
      date: new Date(),
      line: "1",
      order: "1",
      type: "verification",
      user: "1",
    },
    {
      id: "2",
      date: new Date(),
      line: "1",
      order: "1",
      type: "verification",
      user: "1",
    },
  ];
}

// scoped to one line!
export async function getUnconfirmedConfirmations(
  orderId: string
): Promise<IUnConfirmedAggregation> {
  return {
    confirmationTypes: ["verification"],
    nextLine: "2",
    orderId,
    title: "Hello Title",
    currentLine: "1",
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
