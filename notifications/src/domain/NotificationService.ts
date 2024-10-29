import { Notification } from "./entities/Notification";

export interface NotificationService {

    sendNotification(notification: Notification): Promise<void>

}