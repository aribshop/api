import { ITemplateEntity, TemplateType } from "../types/template";

const templates: ITemplateEntity[] = [
  {
    name: "Dentist",
    type: TemplateType.Landing,
    previewOG:
      "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75",
  },
  {
    name: "Store",
    type: TemplateType.Store,
    previewOG:
      "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75",
  },
];

export default templates;
