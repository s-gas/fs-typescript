import type { NewPatientEntry } from "./types.ts";

const parseName = (name: unknown): string => {
  if (!name || typeof name !== "string") {
    throw new Error("Invalid data: missing or invalid 'weather'");
  }
  return name;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || typeof dateOfBirth !== "string") {
    throw new Error("Invalid data: missing or invalid 'dateOfBirth'");
  }
  if (dateOfBirth.length !== "2000-00-00".length) {
    throw new Error("Invalid data: invalid 'dateOfBirth'");
  }
  return dateOfBirth;
}

export const parseNewPatientEntry = (body: unknown): NewPatientEntry => {
  console.log(body);
  if (!body || typeof body !== "object") {
    throw new Error("Invalid data");
  }

  if (!("name" in body && "dateOfBirth" in body && "gender" in body && "occupation" in body)) {
    throw new Error("Invalid data: missing required fields");
  }

  return {
    name: parseName(body.name),
    dateOfBirth: parseDateOfBirth(body.dateOfBirth),
    gender: "male",
    occupation: "Dentist"
  }
}
