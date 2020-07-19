import React, { Component } from 'react';

export class ProgressBar extends Component {
  render() {
    return (
      <div className="ProgressBar">
        <div
          className="progress"
          style={{ transform: `translateX(-${100 - this.props.plasma}%)` }}
        ></div>
      </div>
    );
  }
}

export default ProgressBar;
