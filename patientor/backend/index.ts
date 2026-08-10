import app from "./app.ts";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server listening at :${PORT}`);
});
