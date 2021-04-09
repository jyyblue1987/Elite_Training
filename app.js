
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

require('./db');

const auth = require('./auth.js');


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); 
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'add session secret here!',
  resave: false,
  saveUninitialized: true,
}));

app.use(session({
    secret: 'add session secret here!',
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/register', (req, res) => {
  // register new user
  console.log(req.body);
  auth.register(req.body.username, req.body.email, req.body.password,
      function (error) {
        var data = {code: 201, message: error.message};
        res.send(data);
      },
      function (data) {
          auth.startAuthenticatedSession(req, data,function(err) {
              var data = {};
              if (err) {
                data = {code: 201, message: err.message};
              } else {
                data = {code: 200};
              }
              res.send(data);
          });
      });
});

app.post('/login', (req, res) => {
  // login with username and password
  auth.login(req.body.username, req.body.password,
      function(error) {
        var data = {code: 201, message: error.message};
        res.send(data);
      },
      function(data) {
          auth.startAuthenticatedSession(req, data,function(err) {
            var data = {};
            if (err) {
              data = {code: 201, message: err.message};
            } else {
              data = {code: 200};
            }
            res.send(data);
          })
      });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

