import express from "express";
import { z } from "zod";
import patientsService from "../services/patients.ts";
import { NewPatientSchema } from "../types.ts";

const router = express.Router();

router.get('/', (_req, res) => {
  const data = patientsService.getEntries();
  res.json(data);
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = NewPatientSchema.parse(req.body);
    const addedEntry = patientsService.addEntry(newPatientEntry);
    res.status(201).json(addedEntry);
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      res.status(400).json({ error: err.issues });
    }
    res.status(400).json({ error: "error" });
  }
});

export default router;
