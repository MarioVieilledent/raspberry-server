import express from "express";

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static("./public/dist"));

app.get("/ping", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
