import type { NonSensitiveDiaryEntry } from "../../../backend/src/types";
import { useState } from "react";

interface NewDiaryProps {
  diaries: NonSensitiveDiaryEntry[];
  setDiaries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>;
}

const NewDiary = ({ diaries, setDiaries }: NewDiaryProps) => {
  const [date, setDate] = useState('');

  return (
      <form className="flex flex-col w-fit gap-2 border-l px-4">
        <label className="flex justify-between gap-4 font-mono text-xs">
          DATE
          <input type="date" className="border-b" onChange={handleDate}/>
        </label>
        <label className="flex justify-between gap-4 font-mono text-xs">
          WEATHER
          <input className="border-b"/>
        </label>
        <label className="flex justify-between gap-4 font-mono text-xs">
          VISIBILITY
          <input className="border-b"/>
        </label>
        <button type="submit" className="border rounded-sm px-3 py-1 cursor-pointer font-mono text-xs">ADD</button>
      </form>
  )
};

export default NewDiary;
