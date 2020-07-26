import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipoInfestatori: this.props.tipoInfestatori,
    };
  }
  handleButton = () => {
    let arrayTemp = [];
    this.state.tipoInfestatori.map((e, i) => {
      if (i !== this.props.indexElem) {
        arrayTemp.push(e);
      }
    });
    this.setState({ tipoInfestatori: arrayTemp });
    this.props.turno();
  };

  render() {
    return (
      <footer>
        <div className="plasma">
          <span> Plasma: {this.props.plasma}</span>
          <ProgressBar plasma={this.props.plasma} />
        </div>
        <div className="infestatori">
          <ul>
            {this.state.tipoInfestatori.map((infestatore) => {
              return <li>{infestatore}</li>;
            })}
          </ul>
        </div>

        <button
          disabled={!this.props.isTurno ? 'true' : ''}
          onClick={this.handleButton}
        >
          Turni Rimanenti: {this.state.tipoInfestatori.length}
        </button>
      </footer>
    );
  }
}

export default Footer;
