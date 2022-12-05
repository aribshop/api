import { IClientEntity, IUserEntity } from "../types/users";
import { delay } from "../../../core/util";
import { IStuffAggregation } from "../types/aggregations/stuff";

export async function getStuff(userId: string): Promise<IStuffAggregation> {
  await delay(1000);

  return {
    user: {
      id: userId,
      name: "Nabil",
      email: "pni20156789@gmail.com",
      phone: "123456789",
      picture: "https://laknabil.me/nabil.png",
    },
    groups: ["group1", "group2"],
    site: "MIband7",
    isAdmin: Math.random() > 0.5,
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
