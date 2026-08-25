import { useState, useEffect } from "react";
import diariesService from "./services/diaries";
import Table from "./components/Table";
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
    <div className="p-4">
      <Table diaries={diaries} />
    </div>
  )
}

export default App
