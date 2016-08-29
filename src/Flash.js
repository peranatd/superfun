import React, { Component } from 'react';

class Flash extends Component {
  constructor(props) {
    super(props);
    this.state = {test: 'STATE'};
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default Flash;
