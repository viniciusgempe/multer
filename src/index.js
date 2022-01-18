const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/upload", {
  useNewUrlParser: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index"));
app.use(morgan("dev"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
