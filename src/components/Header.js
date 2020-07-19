import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>ReactVille</h1>
        {this.props.btnReset ? (
          <button className="reset" onClick={() => this.props.reset()}>
            Ricomincia Partita
          </button>
        ) : (
          <ul>
            <NavLink activeClassName="activeItem" className="item" exact to="/">
              Home
            </NavLink>
            <NavLink activeClassName="activeItem" className="item" to="/regole">
              Regole
            </NavLink>
            <NavLink
              activeClassName="activeItem"
              className="item"
              to="/caratteristiche"
            >
              Caratteristiche
            </NavLink>
          </ul>
        )}
      </header>
    );
  }
}

export default Header;
