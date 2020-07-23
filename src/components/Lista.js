import React, { Component } from 'react';
import ElementoLista from './ElementoLista';

export class Lista extends Component {
  handleTipo = (tipo) => {};
  render() {
    return (
      <div className="carContainer">
        <h2>{this.props.titolo}</h2>
        <ul>
          {this.props.tipo.map((item) => (
            <ElementoLista key={item.id} edificio={item} />
          ))}
          {/* <ElementoLista nome={this.props.nome} /> */}
        </ul>
      </div>
    );
  }
}

export default Lista;
