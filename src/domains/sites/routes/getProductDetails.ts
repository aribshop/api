import { Router } from "express";
import { getAuthStuff } from "../../../firebase";
import * as ProductRepository from "../repositories/product";
const router = Router();

/**
 * serving the data for the Frontend -> Products -> Right panel
 * an aggregation of all the data needed to display the product details
 */
export default async function () {
  router.get("/:productId", async (req, res) => {
    const { productId } = req.params;

    const user = getAuthStuff(req);
    const details = await ProductRepository.getProductDetails(productId, user.site);

    res.json({ success: true, details });
  });

  return router;
}
