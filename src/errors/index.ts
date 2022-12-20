export class NotStuffError extends Error {
  constructor(userId:string) {
    super(`User ${userId} is not a stuff`);
  }
}
