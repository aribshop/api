import Express from "express";
import { init } from "./app";
import ENV from "./env";
import { expressjwt } from "express-jwt";


const app = Express();
app.use(Express.json());


// TODO not sure if this pattern is correct
export const jwt = expressjwt({
    secret: ENV.JWTSECRET,
    algorithms: ['HS256'],
    maxAge: 1000000000,
});


async function main() {
    await init({
        express: app,
        auth: ENV.AUTH,
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

