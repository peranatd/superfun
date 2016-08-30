import React from 'react';

const Input = (props) => {
  return (
    <div>
      <div className="words" onChange={props.handleInput}>
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
      <a className="btn btn-primary" onClick={props.handleSubmit}>Submit</a>
      <a className="btn btn-default" onClick={props.toggleMode}>Toggle Input</a>
    </div>
  );
};

module.exports = Input;
