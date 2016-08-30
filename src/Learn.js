import React from 'react';

const Learn = (props) => {
  return (
    <div>
      <div className="words">
        <h3 className="card-title">{props.state.word}</h3>
        <p className="card-text">{props.state.definition}</p>
        <p className="card-text">{props.state.example}</p>
      </div>
      <div className="buttons">
        <a className="btn btn-success" onClick={() => props.practice(true)}>I KNOW THIS</a>
        <a className="btn btn-danger" onClick={() => props.practice(false)}>I DONT KNOW THIS</a>
        <a className="btn btn-default" onClick={props.toggleMode}>Toggle Input</a>
      </div>
    </div>
  );
};

module.exports = Learn;
