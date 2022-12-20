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
import setTemplate from "./routes/setTemplate";
import { ValidationError } from "express-validation";

const router = Router();

interface Props {}

export default async function (props: Props) {
  router.use("/template",VerifyToken, await setTemplate());
  router.use("/template", await getTemplate());
  router.use("/templates", await getTemplates());
  
  router.post("/product/standard", VerifyToken, await createProduct());
  router.post("/product/custom", VerifyToken, await createCustomProduct());
  
  router.use("/products", await getProducts());
  // todo not good name, since it is a private details
  router.use("/product/details",VerifyToken, await getProductDetails());
  router.use("/product", await getProduct());
  
  router.post("/product/status", VerifyToken, await setProductStatus());
  router.post("/product/addQuantity", VerifyToken, await addProductQuantity());
  router.use("/product", VerifyToken, await deleteProduct());
  
  router.post("/new", VerifyToken, await createSite());
  
  router.use("/", await getSite()); // must be the last route!
  router.use(handleError);

  return router;
}

function handleError(err: any, req: any, res: any, next: (err?: any) => void) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  } else {
    next(err);
  }
}
