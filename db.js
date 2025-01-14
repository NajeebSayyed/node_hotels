const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/htels";
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB Server");
});
db.on("error", () => {
  console.log("MongoDB Connection Error");
});
db.on("disconnected", () => {
  console.log("MongoDB Server Disconnected");
});

module.exports = db;
