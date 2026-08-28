import { z } from "zod";

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Entry {
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[];
}

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

export interface PatientWithoutEntries {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  ssn: string;
};

export type NewPatientEntry = Omit<Patient, "id" | "entries">;

export const Gender = {
  Male: "male",
  Female: "female",
  Other: "other",
} as const;

export type Gender = typeof Gender[keyof typeof Gender];

export const NewPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.iso.date(),
  ssn: z.string(),
  gender: z.enum(Gender),
  occupation: z.string(),
});

export const PatientsListSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  ssn: z.string(),
  occupation: z.string(),
  gender: z.enum(Gender),
  dateOfBirth: z.string(),
  entries: z.array(z.object({})),
}));
