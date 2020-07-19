import React, { Component } from 'react';
import edifici from '../data/edifici.json';
import mortali from '../data/mortali.json';
import infestatori from '../data/infestatori.json';

export class Caratteristiche extends Component {
  render() {
    return (
      <div className="Caratteristiche pagina">
        <div className="carEdifici carContainer">
          <h2>Edifici</h2>
        </div>
        <div className="carMortali carContainer">
          <h2>Mortali</h2>
        </div>
        <div className="carInfestatori carContainer">
          <h2>Infestatori</h2>
        </div>
      </div>
    );
  }
}

export default Caratteristiche;
