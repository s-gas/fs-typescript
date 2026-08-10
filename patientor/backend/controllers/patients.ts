import express from "express";

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.end();
});

export default patientsRouter;
