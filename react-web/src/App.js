import React from 'react';
import './App.css';
import Routes from './routes';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes />
        </Router>
      </header>
    </div>
  );
}

export default App;
