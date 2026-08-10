import express from "express";
import patientsService from "../services/patients.ts";
import { parseNewPatientEntry } from "../utils.ts";

const router = express.Router();

router.get('/', (_req, res) => {
  const data = patientsService.getEntries();
  res.json(data);
});

router.post('/', (req, res) => {
  console.log(req.body);
  try {
    const newPatientEntry = parseNewPatientEntry(req.body);
    console.log(newPatientEntry);
    res.end();
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
    res.status(500).json({ error: "error" });
  }
})

export default router;
