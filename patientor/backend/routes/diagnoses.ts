import express from "express";
import diagnosesService from "../services/diagnoses.ts";

const router = express.Router();

router.get('/', (_req, res) => {
  const data = diagnosesService.getEntries();
  res.json(data);
});

export default router;
