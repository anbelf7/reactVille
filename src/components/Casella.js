import React, { Component } from 'react';
import mortaliJson from '../data/mortali.json';
import ReactTooltip from 'react-tooltip';

export class Casella extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persone: [],
      valoreEdificio: 0,
    };
  }
  componentDidMount() {
    let arrayRandom = [];
    let valore = 0;
    for (let i = 0; i < this.props.capienza; i++) {
      let random = Math.floor(Math.random() * mortaliJson.length + 1);

      mortaliJson.map((mortale) => {
        if (random === mortale.id) {
          arrayRandom.push(mortale);
          valore = valore + mortale.valorePlasma;
        }
      });
    }
    this.setState({ persone: arrayRandom, valoreEdificio: valore });
  }

  handleButton = () => {
    this.props.valoreEdificio(this.state.valoreEdificio);
    this.setState({ attacco: false });
    // console.log(this.state.attacco);
  };

  render() {
    return (
      <div
        className={`Casella ${
          this.props.id == this.props.casellaAttacco ? 'attacco' : 'disable'
        }`}
      >
        <div className="mortali">
          {this.state.persone.map((persona, i) => {
            return (
              <div key={i}>
                <div
                  className="icon"
                  data-tip
                  data-for={`mortale${persona.id}`}
                >
                  {persona.icon}
                  {/* <img src={require(`../assets/mortali/${persona.nome}.png`)} /> */}
                </div>
                <ReactTooltip
                  id={`mortale${persona.id}`}
                  place="top"
                  effect="solid"
                >
                  <span>{persona.nome}</span>
                  <br />
                  Valore plasma: {persona.valorePlasma}
                  <br />
                  Paura: {persona.paura}
                </ReactTooltip>
              </div>
            );
          })}
        </div>
        <div className="edifici">
          <img
            src={require(`../assets/edifici/${this.props.edificio}.png`)}
            alt={this.props.edificio}
          />
          {this.props.id == this.props.casellaAttacco && (
            <button
              disabled={!this.props.isAttacco ? 'true' : ''}
              onClick={this.handleButton}
            >
              Attacca
            </button>
          )}
        </div>
        <div className="valore">
          <span>{this.props.edificio} </span>
          <div data-tip data-for="valore">
            {this.state.valoreEdificio}
          </div>
        </div>
        <ReactTooltip id="valore" place="top" effect="solid">
          Valore Edificio
        </ReactTooltip>
      </div>
    );
  }
}

export default Casella;
