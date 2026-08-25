import { useState, useEffect } from "react";
import diariesService from "./services/diaries";
import type { NonSensitiveDiaryEntry } from "../../backend/src/types";

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    const getDiares = async () => {
      try {
        const diaries = await diariesService.getDiaries();
        setDiaries(diaries);
      } catch (err) {
        console.log(err);
      }
    }
    getDiares();
  }, []);

  return (
    <>
      {diaries.map((diary) => <p key={diary.id}>{diary.date} {diary.weather}</p>)}
    </>
  )
}

export default App
