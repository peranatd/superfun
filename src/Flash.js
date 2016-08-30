import React, { Component } from 'react';

class Flash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'an obscure word...',
      definition: 'a definition of the word',
      example: 'a contrived sample sentence using the word'
    };
  }

  render() {
    return (
      <div className="Flash">
        <div className="card card-block">
          <h3 className="card-title">{this.state.word}</h3>
          <p className="card-text">{this.state.definition}</p>
          <p className="card-text">{this.state.example}</p>
          <a className="btn btn-primary btn-success">I KNOW THIS</a>
          <a className="btn btn-primary btn-danger">I DONT KNOW THIS</a>
        </div>
      </div>
    );
  }
}

export default Flash;
