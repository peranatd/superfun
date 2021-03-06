const express = require('express');
const serveStatic = require('serve-static');
const partials = require('express-partials');
const bodyParser = require('body-parser');
const dbMethods = require('./db/helper');

const app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/../build'));

app.get('/api/word', function(req, res) {
  dbMethods.getAllWords()
  .then(words => res.status(200).send(words))
  .catch(err => res.status(404).send(err));
});

app.post('/api/word', function(req, res) {
  dbMethods.addWord(req.body)
  .then(r => {
    if (r === 'already exists') {
      console.log(`updating: ${JSON.stringify(req.body)}`);
      dbMethods.updateWord(req.body)
      .then(r => res.status(401).send(r));
    } else {
      console.log(`adding: ${JSON.stringify(req.body)}`);
      res.status(201).send(r);
    }
  });
});

module.exports = app;
