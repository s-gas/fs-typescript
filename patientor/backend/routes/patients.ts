import express from "express";
import patientsService from "../services/patients.ts";
import { parseNewPatientEntry } from "../utils.ts";

const router = express.Router();

router.get('/', (_req, res) => {
  const data = patientsService.getEntries();
  res.json(data);
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = parseNewPatientEntry(req.body);
    const addedEntry = patientsService.addEntry(newPatientEntry);
    res.status(201).json(addedEntry);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err });
    }
    res.status(400).json({ error: "error" });
  }
});

export default router;
