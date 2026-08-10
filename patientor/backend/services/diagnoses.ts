import data from "../data/diagnoses.ts" with { type: "json" };
import type { DiagnoseEntry } from "../types.ts";

const diagnoses: DiagnoseEntry[] = data;

const getEntries = () => {
  return diagnoses;
};

export default { getEntries };
