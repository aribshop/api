import ENV from "@/env";
import * as redis from "redis";

// FIXME i think the best way to do this is in the main file
const client = redis.createClient({
  url: ENV.REDIS_HOST + ":" + ENV.REDIS_PORT,

  password: ENV.REDIS_PASSWORD,
});

export const InitRedis = () => {
  client.connect().then(() => {
    console.time("Redis init");
    client.ping().then((res) => {
      console.timeEnd("Redis init");
    });
  });
};

export default client;
