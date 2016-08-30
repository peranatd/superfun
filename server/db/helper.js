const db = require('./db');
const Word = require('./model');

exports.getAllWords = function() {
  return Word.find({}, {
    '_id': 0,
    'word': 1,
    'definition': 2,
    'example': 3
  }).exec();
};

exports.addWord = function(word) {
  return Word.findOne({'word': word.word}, { '_id': 0 }).exec()
  .then(result => {
    if (!result) {
      const w = new Word(word);
      return w.save(word);
    } else {
      return 'already exists';
    }
  });
};

exports.updateWord = function(word) {
  return Word.findOneAndUpdate({'word': word.word}, word).exec();
};

