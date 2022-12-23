import Express from "express";
import { init as InitApp } from "./app";
import ENV from "./env";
import CookieParser from "cookie-parser";
import cors from "cors";

import { InitRedis } from "./repository/redis";

const app = Express();
app.use(
  cors({
    credentials: true,
    origin: ENV.FRONTEND_URL,
  })
);

app.use(Express.json());
app.use(CookieParser());

// load the app and serve it

let inited = false;

app.use((req, res, next) => {
  if (inited) return next();

  console.time("init");

  main().then(() => {
    inited = true;
    console.timeEnd("init");
    next();
  });
});

async function main() {
  await Promise.all([
    InitRedis(),
    InitApp({
      express: app,
      auth: "dsdsd",
    }),
  ]);
}

app.listen(ENV.PORT, () => {
  console.log("Listening on port " + ENV.PORT);
});
