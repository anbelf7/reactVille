import React, { Component } from 'react';
import './App.css';
import Mappa from './components/Mappa';
import Footer from './components/Footer';
import Header from './components/Header';
import Regole from './components/Regole';
import Caratteristiche from './components/Caratteristiche';
import infestatoriJson from './data/infestatori.json';
import sfondo from './assets/ghost.png';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plasma: 0,
      start: false,
      numInfestatori: 5,
      infestatori: [],
      indexElem: 0,
      btnReset: false,
      casellaAttacco: null,
      // valoreEdificio: 0,
      isTurno: true,
      isAttacco: true,
    };
  }

  handleNumInfestatori = (e) => {
    let numInfestatori = parseInt(e.target.value);
    this.setState({ numInfestatori: numInfestatori });
  };

  handleSubmit = (e) => {
    let arrayRandomInfestatori = [];
    e.preventDefault();
    for (let i = 0; i < this.state.numInfestatori; i++) {
      let random = Math.floor(Math.random() * infestatoriJson.length + 1);

      infestatoriJson.map((infestatori) => {
        if (random === infestatori.id) {
          // console.log(infestatori);
          arrayRandomInfestatori.push(infestatori);
        }
      });
    }
    this.setState({
      infestatori: arrayRandomInfestatori,
      start: true,
      btnReset: true,
    });
  };

  handleReset = () => {
    this.setState({
      start: false,
      btnReset: false,
      plasma: 0,
      casellaAttacco: null,
      isTurno: true,
      // valoreEdificio: 0,
    });
  };

  handleTurno = () => {
    // let numRandom = Math.floor(Math.random() * 10 + 1);

    let random = Math.floor(Math.random() * this.state.infestatori.length);

    let arrayTemp = [];
    this.state.infestatori.map((e, i) => {
      if (i !== random) {
        arrayTemp.push(e);
      }
    });

    // console.log(random);
    // console.log(arrayTemp);
    // this.setState({ indexElem: random });

    this.setState((prevState) => ({
      // plasma: prevState.plasma + this.state.valoreEdificio,
      indexElem: random,
      infestatori: arrayTemp,
      isTurno: false,
      isAttacco: true,
    }));

    this.state.plasma >= 100 && alert('Partita finita, hai vinto');
    this.state.infestatori.length == 0 && alert('Partita finita, hai perso');

    let attaccoRandom = Math.floor(Math.random() * 9);
    this.setState({ casellaAttacco: attaccoRandom });
    // this.valoreEdificio();
    // this.attacco();
  };

  // attacco = () => {

  // };

  valoreEdificio = (valore) => {
    this.setState({
      // valoreEdificio: valore,
      plasma: this.state.plasma + valore,
      isTurno: true,
      isAttacco: false,
    });

    // console.log(this.state.plasma);
    // console.log('test');
  };

  render() {
    return (
      <div className="App">
        <Header reset={this.handleReset} btnReset={this.state.btnReset} />
        <Switch>
          <Route exact={true} path="/">
            {this.state.start ? (
              <>
                <Mappa
                  numInfestatori={this.state.numInfestatori}
                  casellaAttacco={this.state.casellaAttacco}
                  // infestatori={this.handleInfestatori}
                  valoreEdificio={this.valoreEdificio}
                  isAttacco={this.state.isAttacco}
                />
                <Footer
                  tipoInfestatori={this.state.infestatori.map(
                    (e) =>
                      e.tipologia.charAt(0).toUpperCase() + e.tipologia.slice(1)
                  )}
                  turno={this.handleTurno}
                  indexElem={this.state.indexElem}
                  plasma={this.state.plasma}
                  isTurno={this.state.isTurno}
                />
              </>
            ) : (
              <div className="start">
                <img src={sfondo} className="sfondo" alt="ghost" />
                <form onSubmit={this.handleSubmit}>
                  <label>Scegli con quanti infestatori vuoi attaccare </label>
                  <select
                    value={this.state.numInfestatori}
                    onChange={this.handleNumInfestatori}
                  >
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                  </select>
                  <p>Premi start per iniziare</p>
                  <button type="submit">Start</button>
                </form>
              </div>
            )}
          </Route>
          <Route path="/regole" component={Regole}></Route>
          <Route path="/caratteristiche" component={Caratteristiche}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
