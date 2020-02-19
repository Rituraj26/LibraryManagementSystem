var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  let details = req.body;
  res.render("show", { details: details });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/booksearch", (req, res) => {
  res.render("booksearch");
});

app.get("/bookissue", (req, res) => {
  res.render("bookissue");
});

app.get("/login");

app.post("/register", function(req, res) {
  console.log(req.body);
});

app.listen(3000, function(req, res) {
  console.log("Server started");
});
