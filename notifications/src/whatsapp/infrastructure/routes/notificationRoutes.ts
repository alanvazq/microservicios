import { Router } from "express";
import { NotificationController } from "../controllers/NotificationController";
import { SendNotification } from "../../application/SendNotification";
import { TwilioNotificationService } from "../services/TwilioNotificationService";

export const notificationRouter = Router();

const notificationService = new TwilioNotificationService()
const sendNotification = new SendNotification(notificationService)
const sendNotificationController = new NotificationController(sendNotification);

notificationRouter.post("/send", (req, res) => { sendNotificationController.handle(req, res) })
