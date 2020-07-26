import React, { Component } from 'react';
import edificiJson from '../data/edifici.json';

import Casella from './Casella';

export class Mappa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edifici: [],
      casellaAttacco: 0,
    };
  }

  componentDidMount() {
    let arrayRandom = [];

    for (let i = 0; i < 9; i++) {
      let random = Math.floor(Math.random() * edificiJson.length + 1);

      edificiJson.map((edificio) => {
        if (random === edificio.id) {
          // console.log(edificio);
          arrayRandom.push(edificio);
        }
      });
    }

    this.setState({ edifici: arrayRandom });

    // this.props.infestatori(this.state.infestatori.tipologia)
  }

  render() {
    return (
      <div className="Mappa">
        {this.state.edifici.map((edificio, i) => {
          return (
            <Casella
              key={i}
              id={i}
              edificio={edificio.edificio}
              capienza={edificio.capienza}
              casellaAttacco={this.props.casellaAttacco}
              valoreEdificio={this.props.valoreEdificio}
              isAttacco={this.props.isAttacco}
            />
          );
        })}
      </div>
    );
  }
}

export default Mappa;
