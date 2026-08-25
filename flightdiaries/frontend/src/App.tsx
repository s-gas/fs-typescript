import { useState, useEffect } from "react";
import diariesService from "./services/diaries";
import Table from "./components/Table";
import NewDiary from "./components/NewDiary";
import type { NonSensitiveDiaryEntry } from "../../backend/src/types";

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    const getDiaries = async () => {
      try {
        const diaries = await diariesService.getDiaries();
        setDiaries(diaries);
      } catch (err) {
        console.log(err);
      }
    }
    getDiaries();
  }, []);

  return (
    <div className="p-4 flex gap-8 items-start font-mono">
      <Table diaries={diaries} />
      <NewDiary diaries={diaries} setDiaries={setDiaries} />
    </div>
  )
}

export default App
