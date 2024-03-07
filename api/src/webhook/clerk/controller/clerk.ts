import { NextFunction, Request, Response } from "express";
import { Webhook } from "svix";
import { HttpException } from "../../../middleware/error/utils";
import { logger } from "../../../logs/logger";
import { WebhookEvent } from "@clerk/clerk-sdk-node";
import { handleRegister } from "../../../(user)/services/register";

export const clerkUserCreated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    console.error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env");
    return res.sendStatus(500);
  }

  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  if (!svix_id) throw new HttpException(400, "No svix-id header.");
  if (!svix_timestamp)
    throw new HttpException(400, "No svix-timestamp header.");
  if (!svix_signature)
    throw new HttpException(400, "No svix-signature header.");

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(JSON.stringify(req.body), {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    logger.error(err);
    throw new HttpException(403, "Verifying error.");
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const user = evt.data;

    const id = user.id;
    const email = user.email_addresses[0].email_address;
    const username = user.username;
    const imageUrl = user.image_url;

    req.body = {
      id,
      email,
      username,
      imageUrl,
    };

    try {
      await handleRegister(req, next);
    } catch (err) {
      next(err);
    }
  }

  return res.sendStatus(204);
};
