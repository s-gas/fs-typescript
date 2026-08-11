import type { NewPatientEntry } from "./types.ts";
import { Gender } from "./types.ts";

const parseString = (string: unknown): string => {
  if (!string || typeof string !== "string") {
    throw new Error(`Invalid data: missing or invalid '${string}'`);
  }
  return string;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || typeof dateOfBirth !== "string") {
    throw new Error("Invalid data: missing or invalid 'dateOfBirth'");
  }
  if (dateOfBirth.length !== "2000-00-00".length) {
    throw new Error("Invalid data: invalid 'dateOfBirth'");
  }
  for (let i = 0; i < dateOfBirth.length; i++) {
    if (i === 4 || i === 7) {
      if (dateOfBirth[i] !== "-") {
        throw new Error("Invalid data: invalid 'dateOfBirth'");
      }
    } else {
      if (dateOfBirth[i] < "0" || dateOfBirth[i] > "9") {
        throw new Error("Invalid data: invalid 'dateOfBirth'");
      }
    }
  }
  return dateOfBirth;
};

const isGender = (gender: string): gender is Gender => {
  return (Object.values(Gender) as string[]).includes(gender);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || typeof gender !== "string") {
    throw new Error("Invalid data: missing or invalid 'gender'");
  }
  if (!isGender(gender)) {
    throw new Error("Invalid data: invalid 'gender'");
  }
  return gender;
};

export const parseNewPatientEntry = (body: unknown): NewPatientEntry => {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid data");
  }

  if (!("name" in body && "dateOfBirth" in body && "gender" in body && "occupation" in body)) {
    throw new Error("Invalid data: missing required fields");
  }

  if ("ssn" in body) {
    return {
      name: parseString(body.name),
      dateOfBirth: parseDateOfBirth(body.dateOfBirth),
      gender: parseGender(body.gender),
      occupation: parseString(body.occupation),
      ssn: parseString(body.ssn)
    };
  }

  return {
    name: parseString(body.name),
    dateOfBirth: parseDateOfBirth(body.dateOfBirth),
    gender: parseGender(body.gender),
    occupation: parseString(body.occupation)
  };
};
