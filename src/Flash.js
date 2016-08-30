import React, { Component } from 'react';

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
            <div>
              <div className="words">
                <h3 className="card-title">{this.state.word}</h3>
                <p className="card-text">{this.state.definition}</p>
                <p className="card-text">{this.state.example}</p>
              </div>
              <div className="buttons">
                <a className="btn btn-success">I KNOW THIS</a>
                <a className="btn btn-danger">I DONT KNOW THIS</a>
                <a className="btn btn-default" onClick={this.toggleMode.bind(this)}>Toggle Input</a>
              </div>
            </div>
          ) : (
            <div>
              <div className="words" onChange={this.handleInput.bind(this)}>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">word</span>
                  <input type="text" id="wordInput" className="form-control" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon2">definition</span>
                  <input type="text" id="defInput" className="form-control" aria-describedby="basic-addon2" />
                </div>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon3">example</span>
                  <input type="text" id="exInput" className="form-control" aria-describedby="basic-addon3" />
                </div>
              </div>
              <a className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</a>
              <a className="btn btn-default" onClick={this.toggleMode.bind(this)}>Toggle Input</a>
            </div>
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
