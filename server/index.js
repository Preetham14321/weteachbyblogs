const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "weteachbyblogsdb.chrpmome0sw2.ap-south-1.rds.amazonaws.com",
  user: "root",
  password: "123456789",
  database: "weteachbyblogs"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// signup server  Logic
app.post("/api/signup", (req, res) => {
  const fullName = req.body.fullName;
  console.log("length of input" + fullName.length);
  const email = req.body.email;
  const mobileNumber = req.body.mobileNumber;
  const password = req.body.password;
  console.log("this is " + fullName);
  const sqlInsert =
    fullName.length > 0 &&
    email.length > 0 &&
    email.includes("@") &&
    mobileNumber.length > 6 &&
    mobileNumber.length < 16 &&
    password.length > 7
      ? "INSERT INTO users(FullName,Email,MobileNumber,Password) VALUES (?,?,?,?)"
      : "";
  db.query(
    sqlInsert,
    [fullName, email, mobileNumber, password],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
  res.send("Good  database connection");
});

// login server logic
app.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE Email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong Username/Password Enetered!" });
      }
    }
  );
});

// contact us server logic
app.post("/api/contact", (req, res) => {
  const name = req.body.name;
  console.log("length of input" + name.length);
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  console.log("this is " + message);
  const sqlInsert =
    name.length > 0 &&
    email.length > 0 &&
    email.includes("@") &&
    subject.length > 0 &&
    message.length > 0
      ? "INSERT INTO contact(Name,Email,Subject,Message) VALUES (?,?,?,?)"
      : "";
  db.query(sqlInsert, [name, email, subject, message], (err, result) => {
    console.log(err);
    console.log(result);
  });
  res.send("Good  database connection");
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});

app.listen(3001, () => {
  console.log("Running port on 3001");
});
