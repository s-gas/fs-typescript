import express from "express";
import cors from "cors";
import pingRouter from "./routes/ping.ts";
import diagnosesRouter from "./routes/diagnoses.ts";
import patientsRouter from "./routes/patients.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/ping', pingRouter);
app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

export default app;
