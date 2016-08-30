import React, { Component } from 'react';
import Input from './Input';
import Learn from './Learn';
import $ from 'jquery';

class Flash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      example: '',
      inputMode: false,
      input: {},
      count: 0,
      mastered: [],
      pendingMastery: []
    };
  }

  practice(learned) {
    if (learned) {
      if (this.state.pendingMastery.length) {
        this.setState({
          mastered: [...this.state.mastered, this.state.pendingMastery[0]],
          pendingMastery: this.state.pendingMastery.slice(1)
        }, this.getNext);
      }
    } else {
      this.setState({
        pendingMastery: this.shuffle(this.state.pendingMastery)
      }, this.getNext);
    }
  }

  getNext() {
    if (this.state.pendingMastery.length) {
      this.setState(this.state.pendingMastery[0]);
    } else {
      this.setState({
        word: 'Well Done!',
        definition: 'you have mastered all words currently in the database',
        example: 'time to add some more!'
      });
    }
  }

  shuffle(array) {
    const copy = [...array];
    const result = [];
    while (copy.length) {
      result.push(copy.splice(~~(Math.random()*copy.length), 1)[0]);
    }
    return result;
  }

  componentDidMount() {
    this.getWordList();
  }

  getWordList() {
    $.ajax({
      url: '/api/word',
      method: 'GET'
    }).done(data => {
      this.setState({ pendingMastery: this.shuffle(data) }, this.getNext);
    }).fail(err => {
      console.log(err);
    });
  }

  postWord(word, callback) {
    if (word.word && word.definition && word.example) {
      $.ajax({
        url: '/api/word',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(word)
      }).done(result => {
        this.state.count++;
        this.setState({
          pendingMastery: [...this.state.pendingMastery, word]
        });
        callback(result);
      }).fail(err => {
        callback(err);
      });
    }
  }

  handleInput() {
    this.setState({
      input: {
        word: document.getElementById('wordInput').value,
        definition: document.getElementById('defInput').value,
        example: document.getElementById('exInput').value
      }
    });
  }

  handleSubmit() {
    const word = {
      word: document.getElementById('wordInput').value,
      definition: document.getElementById('defInput').value,
      example: document.getElementById('exInput').value
    };
    this.postWord(word, () => this.clearInput());
  }

  clearInput() {
    document.getElementById('wordInput').value = '';
    document.getElementById('defInput').value = '';
    document.getElementById('exInput').value = '';
    this.handleInput();
  }

  toggleMode() {
    if (this.state.inputMode) {
      this.clearInput();
    }
    this.setState({
      inputMode: !this.state.inputMode
    }, this.getNext);
  }

  render() {
    return (
      <div className="Flash">
        <div className="card card-block">
          {(!this.state.inputMode) ? (
            <Learn
              state={this.state}
              toggleMode={this.toggleMode.bind(this)}
              practice={this.practice.bind(this)}
            />
          ) : (
            <Input
              handleInput={this.handleInput.bind(this)}
              toggleMode={this.toggleMode.bind(this)}
              handleSubmit={this.handleSubmit.bind(this)}
            />
          )}
        </div>
        <div>
        <h4>Words added: {this.state.count}</h4>
        <h4>Words mastered: {this.state.mastered.length} / {this.state.mastered.length + this.state.pendingMastery.length} </h4>
        </div>
      </div>
    );
  }
}

export default Flash;
