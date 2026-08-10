import express from "express";
import pingRouter from "./controllers/ping.ts";

const app = express();

app.use('/api/ping', pingRouter);

export default app;
