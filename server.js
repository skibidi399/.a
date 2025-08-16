// server.js
const express = require("express");
const app = express();

let latestMessage = "none";

app.use(express.json());

// Endpoint for Discord webhook
app.post("/discord", (req, res) => {
    console.log("✅ Webhook received:", req.body);
    if (req.body.content) {
        latestMessage = req.body.content;
    }
    res.sendStatus(200);
});

// Endpoint for Roblox to fetch
app.get("/latest", (req, res) => {
    res.send(latestMessage);
    latestMessage = "none";
});

// Use Render's PORT environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}`));
