import { IClientEntity, IUserEntity } from "../types/users";
import { delay } from "../../../core/util";
import { IStuffAggregation } from "../types/aggregations/stuff";
import auth from "../../../repository/auth";

export async function getStuff(userId: string): Promise<IStuffAggregation> {
  await delay(1000);

  return {
    uid: userId,
    name: "Nabil",
    email: "pni20156789@gmail.com",
    phone: "123456789",
    picture: "https://laknabil.me/nabil.png",
    site: "amazon",
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
    uid: userId,
    name: "user",
    email: "pni20156789@gmail.com",
    phone: "123456789",
    picture: "https://i.pravatar.cc/300",
  };
}

export async function getUserByPhone(phone: string): Promise<IUserEntity> {
  // const user = await auth.getUserByPhoneNumber(phone);
  // todo make it by phone number
  const user = await auth.getUserByEmail(phone);

  return {
    uid: user.uid,
    ...user.customClaims,
    phone,
    picture: user.photoURL ?? "https://laknabil.me/nabil.png",
    name: user.displayName ?? "Stuff",
    email: user.email ?? "",
  };
}
