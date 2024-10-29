import { SendNotification } from "../../application/SendNotification";
import { Request, Response } from "express";

export class NotificationController {

    constructor(private sendNotification: SendNotification) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { to, message } = req.body;

        try {

            await this.sendNotification.run(to, message);
            return res.status(200).json({ message: "Message sent successfully" })

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Failed to send message" })
        }

    }

}