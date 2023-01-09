import { EventEmitter } from "events";
import { IStuffAggregation } from "@/domains/user/types/aggregations/stuff";
import { ILineEntity } from "./domains/chain/types/chain";
import { IClientEntity } from "./domains/user/types/users";
import { IOrderEntity } from "./domains/chain/types/order";

const bus = new EventEmitter();

// you know, you can export Event types from each domain "setupEvents.ts" file and import them here! mind blowing <3
type Events = {
  "users:getStuffsByIds": [string[], IStuffAggregation[]];
  "chain:getSiteFirstLine": [string, ILineEntity | undefined];
  "chain:pushOrder": [IOrderEntity, string];
  "users:ensureClient": [
    {
      name: string;
      phone: string;
    }, // todo create a type for this
    IClientEntity
  ];
};

export function Emit<E extends keyof Events>(
  eventName: E,
  payload: Events[E][0]
) {
  bus.emit(eventName, payload);
}

export function Fetch<E extends keyof Events>(
  eventName: E,
  payload: Events[E][0]
): Promise<Events[E][1]> {
  return new Promise((res, err) => {
    const id = Math.random().toString(36).slice(2, 9);

    const timer = setTimeout(() => {
      err(`Event ${eventName}#${id} timed out!`);
    }, 10000);

    bus.emit(eventName, {
      payload,
      _event: id,
    });

    bus.once(id, (payload) => {
      clearTimeout(timer);
      return res(payload);
    });
  });
}

export function on<E extends keyof Events>(
  eventName: E,
  listener: (payload: Events[E][0]) => void
) {
  bus.on(eventName, listener);
}

export async function onFetch<E extends keyof Events>(
  eventName: E,
  fct: (payload: Events[E][0]) => Promise<Events[E][1]>
) {
  bus.on(
    eventName,
    async (payload: { payload: Events[E][0]; _event: string }) => {
      const data = await fct(payload.payload);
      bus.emit(payload._event, data);
    }
  );
}
