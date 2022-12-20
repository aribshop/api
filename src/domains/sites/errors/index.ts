export class SiteNotFound extends Error {
  constructor(subname: string) {
    super(`Site#${subname} not found`);
  }
}

export class TemplateNotFound extends Error {
  constructor(subname: string) {
    super(`Template#${subname} not found`);
  }
}

export class UnableToUpdateTemplate extends Error {
  constructor(subname: string) {
    super(`Unable to update Template#${subname}`);
  }
}

export class UnableToUpdateProduct extends Error {
  constructor(subname: string, productId: string) {
    super(`Unable to update productId#${productId} for site#${subname}`);
  }
}
