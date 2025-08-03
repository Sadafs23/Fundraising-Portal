const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/data", (req, res) => {
  res.json({
    name: "Intern User",
    referralCode: "intern2025",
    amountRaised: 3500
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
