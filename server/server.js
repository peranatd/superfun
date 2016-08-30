const express = require('express');
const serveStatic = require('serve-static');
const partials = require('express-partials');
const bodyParser = require('body-parser');

const app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/../build'));

// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/../build/index.html`);
// });

module.exports = app;
