import { EventEmitter } from "events";
import { IUser } from "./core/types/types";

const bus = new EventEmitter();

type Events = {
  "user:created": [IUser, void];
  "user:updated": [IUser, string];
  "user:GetByPhone": [string, IUser | undefined];
};

export function Emit<E extends keyof Events>(
  eventName: E,
  payload: Events[E][0]
) {
  bus.emit(eventName, payload);
}

export function Fetched<E extends keyof Events>(
  eventName: E,
  payload: {
    payload: Events[E][0];
    _event: string;
  }
) {
  bus.emit(payload._event, payload);
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
