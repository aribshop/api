import { IClientEntity,IStuffEntity,IUserEntity } from "../types/users";
import { delay } from "../../../core/util";

export async function getStuff(
  userId: string,
  siteId: string
): Promise<IStuffEntity> {
  await delay(1000);

  return {
    id: userId,
    name: "stuff",
    email: "pni20156789@gmail.com",
    groups: ["group1", "group2"],
    phone: "123456789",
    site: siteId,
  };
}

export async function getClient(clientId: string): Promise<IClientEntity> {
  await delay(1000);

  return {
    id: clientId,
    name: "client",
    email: "pni20156789@gmail.com",
    phone: "123456789",
    created: new Date(),
    location: "Algeria, Algiers",
  };
}

export async function getUser(userId: string): Promise<IUserEntity> {
  await delay(1000);

  return {
    id: userId,
    name: "user",
    email: "pni20156789@gmail.com",
    phone: "123456789",
    picture: "https://i.pravatar.cc/300",
  };
}

export async function getUserByPhone(phone: string): Promise<IUserEntity> {
  await delay(1000);

  return {
    id: "123",
    name: "user",
    email: "pni20156789@gmail.com",
    phone,
    picture: "https://i.pravatar.cc/300",
  };
}
