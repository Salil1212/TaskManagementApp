const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Api is running");
});
app.use("/api/tasks", taskRoutes);
app.get("/home", (req, res) => res.json("This is home page"));

app.listen(port, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

async function main() {
  await mongoose.connect(process.env.mongoDBURL);
  console.log("db connected");
}
main().catch((err) => {
  console.log(err);
});
