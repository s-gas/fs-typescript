import axios from "axios";
import type { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from "../types";

const url = "http://localhost:3000/api/diaries";

const getDiaries = async () => {
  const response = await axios.get<NonSensitiveDiaryEntry[]>(url);
  return response.data;
};

const addDiary = async (entry: NewDiaryEntry) => {
  const response = await axios.post<DiaryEntry>(url, entry);
  return response.data;
}

export default { getDiaries, addDiary };
