import Redis from "@/repository/redis";
import { TemplateType } from "../types/template";

export async function linkSubdomainToTemplate(
  subdomain: string,
  template: TemplateType
) {
  // set the subdomain to the template in hash map
  await Redis.hSet("templates", subdomain, template);
}
