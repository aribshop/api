import { Router } from "express";
import getSite from "./routes/getSite";
import { jwt } from "../..";
import getTemplate from "./routes/getTemplate";
import getTemplates from "./routes/getTemplates";
import getProducts from "./routes/getProducts";
import getProduct from "./routes/getProduct";
import createProduct from "./routes/createProduct";

const router = Router();

interface Props {
}

export default async function (props: Props) {

    router.use("/template", await getTemplate());
    router.use("/templates", await getTemplates());

    router.post("/product/standard/create",jwt, await createProduct());

    router.use("/products", await getProducts());
    router.use("/product", await getProduct());

    router.use("/", await getSite());



    router.use(handleError);

    return router;
}

function handleError(err: any, req: any, res: any, next: (err?: any) => void) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send("invalid token...");
    } else {
        next(err);
    }
}
