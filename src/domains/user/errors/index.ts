export class UserNotFoundByPhone extends Error {
  constructor(phone: string) {
    super(`can not find a user by the provided phone#${phone}`);
  }
}
