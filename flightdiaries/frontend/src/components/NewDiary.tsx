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

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    if (!active) return;
    event.preventDefault();
    console.log(date);
    console.log(weather);
    console.log(visibility);
    setDate('');
    setWeather('');
    setVisibility('');
  }

  const active = Boolean(date && weather && visibility);

  return (
      <form className="flex flex-col w-fit gap-2 border-l px-4" onSubmit={handleSubmit}>
        <label className="flex justify-between gap-4 text-xs">
          DATE
        <input type="date" value={date} className="border-b max-w-30" onChange={(e) => {
          setDate(e.target.value);
        }}/>
        </label>
        <label className="flex justify-between gap-4 text-xs">
          WEATHER
        <select value={weather} className="border-b w-26" onChange={(e) => {
          setWeather(e.target.value)
        }}>
            <option value=""></option>
            <option value="sunny">sunny</option>
            <option value="rainy">rainy</option>
            <option value="cloudy">cloudy</option>
            <option value="stormy">stormy</option>
            <option value="windy">windy</option>
          </select>
        </label>
        <label className="flex justify-between gap-4 text-xs">
          VISIBILITY
        <select value={visibility} className="border-b w-26" onChange={(e) => {
          setVisibility(e.target.value)
        }}>
            <option value=""></option>
            <option value="great">great</option>
            <option value="good">good</option>
            <option value="ok">ok</option>
            <option value="poor">poor</option>
          </select>
        </label>
      <button
        type="submit"
        className={`border rounded-sm px-3 py-1 text-xs ${active ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
      >ADD</button>
      </form>
  )
};

export default NewDiary;
