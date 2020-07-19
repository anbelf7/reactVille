import React, { Component } from 'react';

export class Regole extends Component {
  render() {
    return (
      <div className="Regole pagina">
        <p>
          In ReactVille guiderai un'orda di infestatori con l'obiettivo di
          risvegliare lo spirito Darkling e dominare l'intero pianeta.
        </p>
        <p>
          Per poterci riuscire bisognerà attaccare la città e accumulare una
          certa quantità di plasma.
          <br />
          Il plasma viene accumulato quando un infestatore riesce ad entrare in
          un edificio e a combattere contro un mortale. <br />
          Nel momento in cui la barra del plasma sarà piena lo spirito Darkling
          verrà risvegliato e vincerai la partita.
        </p>

        <h1>Come si gioca</h1>
        <p>
          Il gioco è diviso in turni. All'inizio bisogna scegliere con quanti
          infestatori attaccare la città.
          <br /> Il numero degli infestatori determina i turni del gioco.
        </p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default Regole;
