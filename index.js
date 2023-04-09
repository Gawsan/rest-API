const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const postRoute = require("./routes/post");

app.use(express.json());
//Routes
app.use("/post", postRoute);
//connect to db
mongoose.connect(process.env.DB, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("connected", () => {
  console.log("Database connected!");
});

//Listening

app.listen(3000);
