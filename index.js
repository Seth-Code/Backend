const kanyeQuoteApp = require("./kanyeQuoteApp.js");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get("/kanyeQuote", async (req, res) => {
  const response = await kanyeQuoteApp();
  // console.log("\nretrieved by api:", response);
  res.send(response);
});

app.post("/userimage", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
