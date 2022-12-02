import { Router } from "express";
import * as ProductRepository from "../repositories/product";
const router = Router();

/**
 * serving the data for the Frontend -> Products -> Right panel
 */
export default async function () {
  router.use("/:productId", async (req, res) => {
    const { productId } = req.params;
    // todo we don't need the siteId here!
    const details = await ProductRepository.getProductDetails(
      productId,
      "randomSiteId"
    );

    res.json({ success: true, details });
  });

  return router;
}
