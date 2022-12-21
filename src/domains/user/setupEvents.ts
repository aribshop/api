import { onFetch } from "@/events";
import * as UserRepository from "./repositories/users";

export default function setupEvents() {
  onFetch("users:getStuffsByIds", async (ids) => {
    const users = ids.map((id) => UserRepository.getStuff(id));

    return Promise.all(users);
  });
}
