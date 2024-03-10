import { Clerk } from "@clerk/clerk-sdk-node";

const secretKey = process.env.CLERK_SECRET_KEYS;

export const clerkClient = Clerk({
  secretKey,
});
