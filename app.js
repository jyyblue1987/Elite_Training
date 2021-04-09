require('./db');

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, 'build')));


app.use(function (req, res, next) {
  console.log("Cross");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); 
  next();
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/register', (req, res) => {
  console.log("Register");
  res.send({'message': 'message'});
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

