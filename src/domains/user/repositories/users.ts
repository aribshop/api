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
  const client = await auth.getUser(clientId);

  return {
    uid: clientId,
    name: client.displayName ?? "Client",
    email: client.email ?? "",
    phone: client.phoneNumber ?? "",
    // location: "location", // todo i think this should be added, and use custom claims to store it
  };
}

export async function getUser(userId: string): Promise<IUserEntity> {
  const client = await auth.getUser(userId);

  return {
    uid: userId,
    name: client.displayName ?? "user",
    email: client.email ?? "",
    phone: client.phoneNumber ?? "",
    picture: client.photoURL ?? "https://laknabil.me/nabil.png",
  };
}

export async function createUser(params: {
  name: string;
  phone: string;
}): Promise<IUserEntity> {
  const user = await auth.createUser({
    phoneNumber: params.phone,
    displayName: params.name,
  });

  return {
    uid: user.uid,
    ...user.customClaims,
    phone: params.phone,
    picture: user.photoURL ?? "https://laknabil.me/nabil.png",
    name: user.displayName ?? "Stuff",
    email: user.email ?? "",
  };
}

export async function getUserByPhone(
  phone: string
): Promise<IUserEntity | undefined> {
  try {
    const user = await auth.getUserByEmail(phone);

    return {
      uid: user.uid,
      ...user.customClaims,
      phone,
      picture: user.photoURL ?? "https://laknabil.me/nabil.png",
      name: user.displayName ?? "Stuff",
      email: user.email ?? "",
    };
  } catch (e) {
    return undefined;
  }
}
