require("dotenv").config();

const mongoose = require("mongoose");
//mongodb+srv://erp-user:rf3utMTO8b6h4U2D@cluster0.yahz3.mongodb.net/erp?retryWrites=true&w=majority
//mongodb://127.0.0.1:27017/erp
let db = mongoose.connect("mongodb+srv://zain_db_user:zaindb123@cluster0.kgeal.mongodb.net/jobSearching?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db1 = mongoose.connection;
db1.on("error", console.error.bind(console, "connection error:"));
db1.once("open", function () {
  // we're connected!
  console.log("DB Connection successful!");
});

module.exports = mongoose;
