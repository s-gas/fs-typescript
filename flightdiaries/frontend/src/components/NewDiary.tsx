import { type NonSensitiveDiaryEntry } from "../../../backend/src/types";
import { useState } from "react";

interface NewDiaryProps {
  diaries: NonSensitiveDiaryEntry[];
  setDiaries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>;
}

const NewDiary = ({ diaries, setDiaries }: NewDiaryProps) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('');
  const [visibility, setVisibility] = useState('');

  return (
      <form className="flex flex-col w-fit gap-2 border-l px-4">
        <label className="flex justify-between gap-4 font-mono text-xs">
          DATE
          <input type="date" className="border-b max-w-30" onChange={(e) => setDate(e.target.value)}/>
        </label>
        <label className="flex justify-between gap-4 font-mono text-xs">
          WEATHER
          <select className="border-b w-26" onChange={(e) => setWeather(e.target.value)}>
            <option value="sunny">sunny</option>
            <option value="rainy">rainy</option>
            <option value="cloudy">cloudy</option>
            <option value="stormy">stormy</option>
            <option value="windy">windy</option>
          </select>
        </label>
        <label className="flex justify-between gap-4 font-mono text-xs">
          VISIBILITY
          <select className="border-b w-26" onChange={(e) => setVisibility(e.target.value)}>
            <option value="great">great</option>
            <option value="good">good</option>
            <option value="ok">ok</option>
            <option value="poor">poor</option>
          </select>
        </label>
        <button type="submit" className="border rounded-sm px-3 py-1 cursor-pointer font-mono text-xs">ADD</button>
      </form>
  )
};

export default NewDiary;
