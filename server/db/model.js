const db = require('./db');
const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: String,
  definition: String,
  example: String
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;

// Test

// let test = new Word({
//   word: 'testWord',
//   definition: 'testDef',
//   example: 'testExample'
// });

// test.save((err, test) => {
//   if (err) { console.log(err); }
//   else { console.log(test); }
// });
