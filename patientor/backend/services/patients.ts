import { v1 as uuid } from "uuid";
import data from "../data/patients.ts" with { type: "json" };
import type { NewPatientEntry, Patient, PatientWithoutSSN } from "../types.ts";

const patients: Patient[] = data;

const getEntries = (): PatientWithoutSSN[] => {
  return patients.map((patient) => (
    {
      id: patient.id,
      name: patient.name,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      occupation: patient.occupation
    }
  ));
};

const addEntry = (patient: NewPatientEntry): Patient => {
  const id = uuid();
  patients.push({ ...patient, id });
  return { ...patient, id };
}

export default { getEntries, addEntry };
