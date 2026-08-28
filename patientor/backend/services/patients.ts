import { v1 as uuid } from "uuid";
import data from "../data/patients.ts" with { type: "json" };
import type { NewPatientEntry, Patient, PatientWithoutEntries } from "../types.ts";
import { PatientsListSchema } from "../types.ts";

const patientsWithoutEntries: PatientWithoutEntries[] = data;
const patients = PatientsListSchema.parse(patientsWithoutEntries.map((p) => ({ ...p, entries: [] })));

const getEntries = (): Patient[] => {
  return patients;
};

const getEntryById = (id: string) => {
  const entry = patients.find((p) => p.id === id);
  if (!entry) throw new Error("entry not found");
  return entry;
};

const addEntry = (patient: NewPatientEntry): Patient => {
  const id = uuid();
  patients.push({ ...patient, id, entries: [] });
  return { ...patient, id, entries: [] };
};

export default { getEntries, getEntryById, addEntry };
