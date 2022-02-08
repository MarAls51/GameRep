const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "SuperComplexPassword123",
  database: "MyDatabase",
});

app.get("/backend", (req, res) => {
  db.query(
    "SELECT population,countryname FROM MyDatabase.countries WHERE id = 3",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      r = JSON.parse(JSON.stringify(result));
      res
        .header("Access-Control-Allow-Origin", "http://localhost:3000")
        .json(r);
    }
  );
});

app.get("/b", (req, res) => {
  db.query(
    "SELECT titles,url,cName FROM MyDatabase.MenuItems",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      r = JSON.parse(JSON.stringify(result));
      res
        .header("Access-Control-Allow-Origin", "http://localhost:3000")
        .json(r);
    }
  );
});

app.get("/topgames", (req, res) => {
  db.query(
    "SELECT id,url,video,rating,name FROM MyDatabase.games",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      r = JSON.parse(JSON.stringify(result));
      res
        .header("Access-Control-Allow-Origin", "http://localhost:3000")
        .json(r);
    }
  );
});

app.get("/topstudios", (req, res) => {
  db.query("SELECT id,name,url FROM MyDatabase.studios", (err, result) => {
    if (err) {
      console.log(err);
    }
    r = JSON.parse(JSON.stringify(result));
    res.header("Access-Control-Allow-Origin", "http://localhost:3000").json(r);
  });
});

app.get("/newgames", (req, res) => {
  db.query("SELECT id,name,url FROM MyDatabase.newGames", (err, result) => {
    if (err) {
      console.log(err);
    }
    r = JSON.parse(JSON.stringify(result));
    res.header("Access-Control-Allow-Origin", "http://localhost:3000").json(r);
  });
});

app.get("/communities", (req, res) => {
  db.query("SELECT id,url,master,masterName,rep,communityName FROM MyDatabase.communities", (err, result) => {
    if (err) {
      console.log(err);
    }
    r = JSON.parse(JSON.stringify(result));
    res.header("Access-Control-Allow-Origin", "http://localhost:3000").json(r);
  });
});




app.post("/registeruser", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if(err) {
      console.log(err)
    }
    db.query(
      "INSERT INTO users (username, password, email) VALUES (?,?,?)",
      [username, password, email],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.post("/loginuser", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? and password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/Password combination" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server running");
});
