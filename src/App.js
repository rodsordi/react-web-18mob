import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
