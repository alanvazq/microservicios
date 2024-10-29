import express from 'express';
import "dotenv/config"
import { notificationRouter } from './whatsapp/infrastructure/routes/notificationRoutes';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/notifications", notificationRouter);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});