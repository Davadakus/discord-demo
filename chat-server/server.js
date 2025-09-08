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
  let userId = req.params.id;
  let filePath = `./messages/${userId}.json`;
  let messages = [];
  //   let messagesDecode = [];
  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    // messagesDecode = JSON.stringify(messages);
  }

  console.log(`Fetch request of userId ${userId}`);
  res.send(messages);
});

app.post("/submit-post", (req, res) => {
  //   const data = req.body;
  //   console.log(JSON.stringify(data));
  let userId = req.body.senderId; // or however you know the user
  let filePath = `./messages/${userId}.json`;
  let messages = [];
  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
  let newMessage = {
    messageId: req.body.messageId,
    senderId: req.body.senderId,
    message: req.body.message,
    time: new Date().toString(),
  };
  messages.push(newMessage);
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
  res.json(newMessage);

  console.log("Text has been sent successfuly");
  //   res.send("Text has been sent");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
