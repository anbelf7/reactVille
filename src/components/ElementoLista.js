import React, { Component } from 'react';

export class ElementoLista extends Component {
  render() {
    {
      // switch (this.props.tipo) {
      //   case edifici:
      //     return edifici;
      //     break;
      //   default:
      //     break;
      // }
    }
    return (
      <li>
        {console.log(this.props.edificio)}
        <div>{this.props.edificio.edificio}</div>
      </li>
    );
  }
}

export default ElementoLista;
