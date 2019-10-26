import React from 'react';
import './App.css';
import Header from './components/Header/index'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title={ "Mercado Livre" } />

        <Router>
          <Switch>
            <Route exact path="/teste" component={ () => (<div>TESTE</div>)} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
