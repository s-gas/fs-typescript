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
    <table className="text-center">
      <thead>
        <tr>
          <th className="px-2">Date</th>
          <th className="px-2">Weather</th>
          <th className="px-2">Visibility</th>
        </tr>
      </thead>
      {diaries.map((diary) => (
        <tbody key={diary.id}>
          <tr>
            <td>{diary.date}</td>
            <td>{diary.weather}</td>
            <td>{diary.visibility}</td>
          </tr>
        </tbody>
      ))}
    </table>
  )
}

export default App
