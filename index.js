const express = require("express");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");

const key = require("./config/key.js");

const app = express();

// Setting Up The Middlewares
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// Create mongo connection
const conn = mongoose.createConnection(key.mongoURI);

// Init gfs
app.locals.gfs;

conn.once("open", () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Setting Up Routes

app.use("/", require("./routes/userRoute"));
app.use("/file", require("./routes/fileRouter"));

// PORT Assigning and Server Listening

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server listening on Port : ${PORT}`));
