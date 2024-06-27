const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");
require("dotenv").config();
const app = express();

// mongoose.connect("mongodb://localhost:27017/taskdb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.get("/home", (req, res) => res.json("This is home page"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// mongoose.connect(process.env.mongoDBURL).then(() => {
//   console.log("App connected to database");
// });
// app.listen(process.env.PORT, () => {
//   console.log(`App is listening to port: ${process.env.PORT}`);
// });
async function main() {
  await mongoose.connect(process.env.mongoDBURL);
  console.log("db connected");
}
main().catch((err) => {
  console.log(err);
});
