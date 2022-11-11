export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// todo export middleware function that checks the user type "user" or "admin"
