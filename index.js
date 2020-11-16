const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5003;
const app = express();
const bodyParser = require("body-parser")

// mongoose.connect(
//   "mongodb+srv://BlogUser:jAVhPqR9YORwjwXW@cluster0-fc8do.gcp.mongodb.net/BlogDB?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   }
// );

// mongoose.connect(
//   "mongodb+srv://oladosutayo:oladosutayo@cluster0.0fdvb.mongodb.net/blogDB?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   }
// );
mongoose.connect("mongodb://localhost:27017/Spidium", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//middleware

app.use("/uploads", express.static("uploads"));
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);
const blogRoute = require("./routes/blogpost");
app.use("/blogPost", blogRoute);

data = {
  msg: "Welcome on DevStack Blog App development YouTube video series",
  info: "This is a root endpoint",
  Working: "Documentations of other endpoints will be release soon :)",
  request:
    "Hey if you did'nt subscribed my YouTube channle please subscribe it",
};

app.route("/").get((req, res) => res.json(data));

app.listen(port, "0.0.0.0", () =>
  console.log(`welcome your listinnig at port ${port}`)
);
