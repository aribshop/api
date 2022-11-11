import Express from "express";
import { init } from "./app";
import ENV from "./env";

const app = Express();
app.use(Express.json());



async function main() {
    await init(app);

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

