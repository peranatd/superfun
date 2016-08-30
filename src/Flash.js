import React, { Component } from 'react';
import Input from './Input';
import Learn from './Learn';
import $ from 'jquery';

class Flash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'an obscure word...',
      definition: 'a definition of the word',
      example: 'a contrived sample sentence using the word',
      inputMode: false,
      input: {},
      count: 0
    };
  }

  toggleMode() {
    if (this.state.inputMode) {
      this.clearInput();
    }
    this.setState({
      inputMode: !this.state.inputMode
    });
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
    // send the input to server
    // increment count if successful
    this.state.count++;
    this.clearInput();
  }

  clearInput() {
    document.getElementById('wordInput').value = '';
    document.getElementById('defInput').value = '';
    document.getElementById('exInput').value = '';
    this.handleInput();
  }

  render() {
    return (
      <div className="Flash">
        <div className="card card-block">
          {(!this.state.inputMode) ? (
            <Learn
              state={this.state}
              toggleMode={this.toggleMode.bind(this)}
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
        {JSON.stringify(this.state)}
        </div>
      </div>
    );
  }
}

export default Flash;
