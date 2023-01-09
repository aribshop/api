export class OrderIsFinishedError extends Error {
  constructor(orderId: string) {
    super(`order#${orderId} is already on the last line`);
  }
}

export class YouDontHavePermissionError extends Error {
  constructor(resourceId: string, resourceType: "group" | "tag") {
    super(
      `you don't have permission to do update ${resourceType}#${resourceId}`
    );
  }
}
