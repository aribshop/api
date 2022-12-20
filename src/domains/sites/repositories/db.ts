import DB from "../../../repository/database";

export const SiteCollection = DB.collection("sites");

export const TemplateCollection = DB.collection("templates");

export const ProductCollection = (siteId: string) =>
  SiteCollection.doc(siteId).collection("products");
