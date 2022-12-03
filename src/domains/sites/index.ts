import { Router } from "express";
import getSite from "./routes/getSite";
import getTemplate from "./routes/getTemplate";
import getTemplates from "./routes/getTemplates";
import getProducts from "./routes/getProducts";
import getProduct from "./routes/getProduct";
import createProduct from "./routes/createProduct";
import createCustomProduct from "./routes/createCustomProduct";
import createSite from "./routes/createSite";
import { VerifyToken } from "../../firebase";
import getProductDetails from "./routes/getProductDetails";
import setProductStatus from "./routes/setProductStatus";
import addProductQuantity from "./routes/addProductQuantity";
import deleteProduct from "./routes/deleteProduct";

const router = Router();

interface Props {}

export default async function (props: Props) {
  router.use("/", await getSite());
  router.use("/template", await getTemplate());
  router.use("/templates", await getTemplates());

  router.post("/product/standard", VerifyToken, await createProduct());
  router.post("/product/custom", VerifyToken, await createCustomProduct());

  router.use("/products", await getProducts());
  router.use("/product", await getProduct());
  router.use("/product/details", await getProductDetails());

  router.post("/product/status", VerifyToken, await setProductStatus());
  router.post("/product/addQuantity", VerifyToken, await addProductQuantity());
  router.use("/product", VerifyToken, await deleteProduct());

  router.post("/new", VerifyToken, await createSite());

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
