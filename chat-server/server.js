const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // <- allow all origins
app.use(express.json());

app.get("/", (req, res) => {
  console.log("GET / was called");
  res.send("Hello World!");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const filePath = `./messages/${userId}.json`;
  let messages = [];
  let messagesDecode = [];
  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    messagesDecode = JSON.stringify(messages);
  }

  console.log(`Received Message from Server ${messagesDecode}`);
  res.send(messages);
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
