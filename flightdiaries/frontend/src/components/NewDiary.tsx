import type { Weather, Visibility, NewDiaryEntry, NonSensitiveDiaryEntry } from "../types";
import { useState } from "react";
import diariesService from "../services/diaries";
import axios from "axios";

interface NewDiaryProps {
  diaries: NonSensitiveDiaryEntry[];
  setDiaries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>;
}

const NewDiary = ({ diaries, setDiaries }: NewDiaryProps) => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<Weather | "">("");
  const [visibility, setVisibility] = useState<Visibility | "">("");
  const [errorMessage, setErrorMessage] = useState("Ooops! Something went wrong");

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!active) return;
    const entry: NewDiaryEntry = {
      weather: weather as Weather,
      visibility: visibility as Visibility,
      date,
    }
    try {
      const response = await diariesService.addDiary(entry);
      setDiaries(diaries.concat({id: response.id, weather: response.weather, visibility: response.visibility, date: response.date}))
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        setErrorMessage("Ooops! Something went wrong.");
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      }
    }
    setDate('');
    setWeather('');
    setVisibility('');
  }

  const active = Boolean(date && weather && visibility);

  return (
    <div className="flex flex-col px-4 border-l gap-2">
      <form className="flex flex-col w-fit gap-2" onSubmit={handleSubmit}>
        <label className="flex justify-between gap-4 text-xs">
          DATE
        <input type="date" value={date} className="border-b max-w-30" onChange={(e) => {
          setDate(e.target.value);
        }}/>
        </label>
        <label className="flex justify-between gap-4 text-xs">
          WEATHER
        <select value={weather} className="border-b w-26" onChange={(e) => {
          setWeather(e.target.value as Weather | "");
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
          setVisibility(e.target.value as Visibility | "");
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
        >
          ADD
        </button>
      </form>
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  )
};

export default NewDiary;
