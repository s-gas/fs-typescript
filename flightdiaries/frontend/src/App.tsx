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
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Weather</th>
          <th>Visibility</th>
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
