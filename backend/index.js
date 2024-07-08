const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const propertyRouter = require("./routers/property");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", propertyRouter);

mongoose
  .connect("mongodb://localhost:27017/RealState")
  .then(() => {
    app.listen(3000, () => {
      console.log("Database Connected!");
    });
  })
  .catch((error) => {
    console.error(error);
  });
