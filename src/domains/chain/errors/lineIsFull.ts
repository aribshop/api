export class LineIsFullError extends Error {}

export class GroupNotFound extends Error {
  constructor(groupId: string, userId: string) {
    super(`Group ${groupId} not found for user ${userId}`);
  }
}
