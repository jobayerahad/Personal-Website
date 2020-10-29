const express = require("express");
const app = express();
const functions = require("firebase-functions");

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/recaptcha", require("./api/reCaptcha"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

exports.app = functions.https.onRequest(app);
