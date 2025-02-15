import express from "express";
import path from "path"; 
import { fileURLToPath } from "url"; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();
const PORT = 5010;

app.use(express.static(path.join(__dirname, "dist"))); 

app.get("/suhail", (req, res) => {
  try {
    res.status(200).json({ message: "Hello, Suhail!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// new 3 lines
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
