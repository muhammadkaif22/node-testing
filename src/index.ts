import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Azure!");
});

app.get("/api/v1/ping", (req: Request, res: Response) => {
  res.send("Apis are live!");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
