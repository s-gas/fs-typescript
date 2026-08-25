import axios from "axios";
import type { NonSensitiveDiaryEntry } from "../../../backend/src/types";

const url = "http://localhost:3000/api/diaries";

const getDiares = async () => {
  const response = await axios.get<NonSensitiveDiaryEntry[]>(url);
  return response.data;
};

export default { getDiares };
