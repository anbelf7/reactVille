import React, { Component } from 'react';

export class ProgressBar extends Component {
  render() {
    return (
      <div className="ProgressBar">
        <div
          className="progress"
          style={{
            transform: `translateX(-${
              this.props.plasma < 100 ? 100 - this.props.plasma : 0
            }%)`,
          }}
        ></div>
      </div>
    );
  }
}

export default ProgressBar;
