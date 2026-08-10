import express from "express";
import cors from "cors";
import pingRouter from "./controllers/ping.ts";
import patientsRouter from "./controllers/patients.ts";

const app = express();

app.use(cors());

app.use('/api/ping', pingRouter);
app.use('/api/patients', patientsRouter);

export default app;
