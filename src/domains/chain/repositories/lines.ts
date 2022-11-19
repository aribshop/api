import { delay } from "../../../core/util";
import { IConfirmationModel, ILine, ILineModel } from "../types/chain";

export async function getLines(userId: string): Promise<ILineModel[]> {
  await delay(1000);

  return [
    {
      id: "1",
      name: "production",
      isPublic: false,
      expiresTime: 1500,
      maxOrders: 10,
      groups: [],
      confirmations: ["email"],
      site: "123",
      next: "2",
    },
    {
      id: "2",
      name: "cooking",
      isPublic: false,
      expiresTime: 1500,
      maxOrders: 10,
      groups: [],
      confirmations: ["QR"],
      site: "123",
      next: "3",
    },
    {
      id: "3",
      name: "packaging",
      isPublic: false,
      expiresTime: 1500,
      maxOrders: 10,
      groups: [],
      confirmations: ["file"],
      site: "123",
    },
  ];
}

export async function getPublicLines(siteId: string): Promise<ILineModel[]> {
  await delay(1000);
  // todo get the number of orders in each line
  // todo public line is a standalone type!
  return [
    {
      id: "1",
      name: "line 1",
      isPublic: true,
      expiresTime: 1500,
      maxOrders: 10,
      groups: [],
      confirmations: [],
      site: "123",
    },
    {
      id: "2",
      name: "line 2",
      isPublic: true,
      expiresTime: 1500,
      maxOrders: 10,
      groups: [],
      confirmations: [],
      site: "123",
    },
    {
      id: "3",
      name: "line 3",
      isPublic: true,
      expiresTime: 1500,
      maxOrders: 10,
      groups: [],
      confirmations: [],
      site: "123",
    },
    {
      id: "4",
      name: "line 4",
      isPublic: true,
      expiresTime: 1500,
      maxOrders: 10,
      groups: [],
      confirmations: [],
      site: "123",
    },
  ];
}

export async function getConfirmations(
  orderID: string
): Promise<IConfirmationModel[]> {
  await delay(1000);

  return [
    {
      id: "1",
      date: new Date(),
      line: "1",
      order: "1",
      type: "email",
      user: "1",
    },
    {
      id: "2",
      date: new Date(),
      line: "1",
      order: "1",
      type: "email",
      user: "1",
    },
  ];
}
