import data from "../data/patients.ts" with { type: "json" };
import type { Patient, PatientWithoutSSN } from "../types.ts";

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

export default { getEntries };
