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
  const heightNumber = Number(height);
  const weightNumber = Number(weight);
  if (isNaN(heightNumber) || isNaN(weightNumber)) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }
  try {
    const bmi = calculateBmi(heightNumber, weightNumber);
    res.json({
      weight,
      height,
      bmi
    });
  } catch (err) {
    if (err instanceof Error) console.log(err);
    res.status(400).json({ error: "malformatted parameters" });
  }
});

app.post('/exercises', (req, res) => {
  const { dailyExercises, target } = req.body;
  if (!dailyExercises || !target) {
    res.status(400).json({ error: "parameters missing " });
    return;
  }
  if (!Array.isArray(dailyExercises) || doesDailyExercisesContainNaN(dailyExercises) || isNaN(Number(target))) {
    res.status(400).json({ error: "malformatted parameters " });
    return;
  }
  res.json(calculateExercises(dailyExercises as number[], target as number));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at :${PORT}`);
});
