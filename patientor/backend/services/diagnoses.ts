import data from "../data/diagnoses.ts" with { type: "json" };
import type { Diagnose } from "../types.ts";

const diagnoses: Diagnose[] = data;

const getEntries = () => {
  return diagnoses;
};

export default { getEntries };
