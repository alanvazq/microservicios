import { Notification } from "../../domain/entities/Notification";
import { NotificationService } from "../../domain/NotificationService";
import twilio from "twilio";

export class TwilioNotificationService implements NotificationService {
    private client;

    constructor() {
        this.client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    }

    async sendNotification(notification: Notification): Promise<void> {
        await this.client.messages.create({
            from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
            to: `whatsapp:${notification.to}`,
            body: notification.message,
        });
    }
}