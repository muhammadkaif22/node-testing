const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req: any, res: any) => {
  res.json({ message: "Hello, API!" });
});

app.get("/api/v1/ping/new", (req: any, res: any) => {
  res.json({message: "Wow its working"})
})

// Handle 404 - Not Found
app.use((req: any, res: any) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
