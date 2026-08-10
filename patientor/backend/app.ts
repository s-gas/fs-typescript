import express from "express";
import cors from "cors";
import pingRouter from "./controllers/ping.ts";

const app = express();

app.use(cors());

app.use('/api/ping', pingRouter);

export default app;
