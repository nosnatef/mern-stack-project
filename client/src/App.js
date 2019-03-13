import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./components/AppNavbar";
import PlayList from './components/PlayList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <PlayList />
      </div>
    );
  }
}

export default App;
