import { onFetch } from "@/events";
import * as UserRepository from "./repositories/users";

export default function setupEvents() {
  onFetch("users:getStuffsByIds", async (ids) => {
    const users = ids.map((id) => UserRepository.getStuff(id));

    return Promise.all(users);
  });

  onFetch("users:ensureClient", async (client) => {
    const user = await UserRepository.getUserByPhone(client.phone);
    if (!user) {
      return await UserRepository.createUser(client);
    }

    return user;
  });
}
