import { Notification } from "../domain/entities/Notification";
import { NotificationService } from "../domain/NotificationService";

export class SendNotification {
    constructor(private notificationService: NotificationService) { }

    async run(to: string, message: string): Promise<void> {
        const notification = new Notification(to, message);
        return this.notificationService.sendNotification(notification);
    }

}