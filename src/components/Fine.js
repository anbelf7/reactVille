import React, { Component } from 'react';

export class Fine extends Component {
  render() {
    return (
      <div className={`Fine ${this.props.risultato}`}>
        <div className="risultato">
          <h2>Hai {this.props.risultato}!</h2>
          <button onClick={this.props.handleReset}>Nuova Partita</button>
        </div>
      </div>
    );
  }
}

export default Fine;
