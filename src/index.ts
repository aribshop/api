import Express from "express";
import { init } from "./app";
import ENV from "./env";
import CookieParser from "cookie-parser";
import cors from "cors";

const app = Express();
app.use(
  cors({
    credentials: true,
    origin: ENV.FRONTEND_URL,
  })
);

app.use(Express.json());
app.use(CookieParser());

async function main() {
  await init({
    express: app,
    auth: "dsdsd",
  });
}

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

app.listen(ENV.PORT, () => {
  console.log("Listening on port " + ENV.PORT);
});
