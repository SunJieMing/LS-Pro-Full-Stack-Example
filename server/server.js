const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./user');
mongoose.connect('mongodb://localhost/our-full-stack-app');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/new-user', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err) => {
    if (err) res.send(err);
    res.send('user successfully created');
  });
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.send(err);
    res.send(users);
  });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
