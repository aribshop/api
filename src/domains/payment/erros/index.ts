export class FirstLineNotFound extends Error {
  constructor(site: string, product: string) {
    super(
      `first line not found in site#${site}, trying to place product#${product}`
    );
  }
}
