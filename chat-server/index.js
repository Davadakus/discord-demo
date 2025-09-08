const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json()); // so we can read JSON body
// Example endpoint to send a message
app.post("/send", (req, res) => {
  const { userId, message } = req.body;

  if (!userId || !message) {
    return res.status(400).json({ error: "Missing userId or message" });
  }
  // Path to user’s messages JSON
  const filePath = `./messages/${userId}.json`;
  // If file doesn’t exist, start with empty array
  let messages = [];
  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
  // Add new message
  const newMessage = { text: message, timestamp: Date.now() };
  messages.push(newMessage);
  // Save back to file
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
  res.json({ success: true, messages });
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
