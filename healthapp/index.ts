import express from 'express';
import { calculateBmi } from './bmiCalculator.ts';
import { doesDailyExercisesContainNaN, calculateExercises } from './exerciseCalculator.ts';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  if (!height || !weight) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }
  if (isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }
  try {
    const bmi = calculateBmi(Number(height), Number(weight));
    res.json({
      weight: Number(weight),
      height: Number(height),
      bmi
    });
  } catch (err) {
    if (err instanceof Error) console.log(err);
    res.status(400).json({ error: "malformatted parameters" });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    res.status(400).json({ error: "parameters missing" });
    return;
  }
  if (!Array.isArray(daily_exercises) || doesDailyExercisesContainNaN(daily_exercises) || isNaN(Number(target))) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }
  res.json(calculateExercises(daily_exercises as number[], target as number));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at :${PORT}`);
});
