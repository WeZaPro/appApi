const express = require("express");
const app = express();
const port = 4000;

// Middleware สำหรับรับข้อมูล JSON
app.use(express.json());

// ตัวอย่าง API route
app.get("/", (req, res) => {
  res.send("Start App Api Test AAAAAAA");
});

app.get("/api/data", (req, res) => {
  const data = { message: "This is some data from the API-1234567890" };
  res.json(data);
});
app.post("/api/data", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Received data: Name - ${name}, Age - ${age}` });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
