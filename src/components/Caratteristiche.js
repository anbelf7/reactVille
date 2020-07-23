import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import edifici from '../data/edifici.json';
import mortali from '../data/mortali.json';
import infestatori from '../data/infestatori.json';

export class Caratteristiche extends Component {
  render() {
    const tipo = [edifici, mortali, infestatori];
    return (
      <div className="Caratteristiche pagina">
        <div className="carEdifici carContainer">
          <h2>Edifici</h2>
          <ul>
            <li className="titoloLi">
              <div></div>
              <div></div>
              <div>Capienza</div>
            </li>
            {edifici.map((edificio) => (
              <li>
                <div>
                  <img
                    src={require(`../assets/edifici/${edificio.edificio}.png`)}
                    alt={edificio.edificio}
                  />
                </div>
                <div>
                  {edificio.edificio.charAt(0).toUpperCase() +
                    edificio.edificio.slice(1)}
                </div>
                <div>{edificio.capienza}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="carMortali carContainer">
          <h2>Mortali</h2>
          <ul>
            <li className="titoloLi">
              <div></div>
              <div></div>
              <div>Plasma</div>
              <div>Credenza</div>
            </li>
            {mortali.map((mortale) => (
              <li>
                <div>
                  <span>{mortale.icon}</span>
                </div>
                <div>
                  {mortale.nome.charAt(0).toUpperCase() + mortale.nome.slice(1)}
                </div>
                <div>{mortale.valorePlasma}</div>
                <div>{mortale.credenza}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="carInfestatori carContainer">
          <h2>Infestatori</h2>
          <ul>
            <li className="titoloLi">
              <div></div>
              <div>Paura</div>
              <div>Edifici Vietati</div>
            </li>
            {infestatori.map((infestatore) => (
              <li>
                <div>
                  {infestatore.tipologia.charAt(0).toUpperCase() +
                    infestatore.tipologia.slice(1)}
                </div>
                <div>{infestatore.valorePaura}</div>
                <div>
                  {infestatore.edificiVietati.map((icon) => {
                    return (
                      <>
                        <img
                          data-tip
                          data-for={`edificiImg${icon}`}
                          src={require(`../assets/edifici/${icon}.png`)}
                          alt={icon}
                        />
                        <ReactTooltip
                          id={`edificiImg${icon}`}
                          place="top"
                          effect="solid"
                        >
                          {icon.charAt(0).toUpperCase() + icon.slice(1)}
                        </ReactTooltip>
                      </>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Caratteristiche;
