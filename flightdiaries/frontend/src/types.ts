export type Weather = "sunny" | "rainy" | "cloudy" | "stormy" | "windy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface NewDiaryEntry {
  weather: Weather;
  visibility: Visibility;
  date: string;
  comment?: string | undefined;
};

export interface DiaryEntry extends NewDiaryEntry {
  id: number;
};

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
