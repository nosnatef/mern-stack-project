import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./components/AppNavbar";
import PlayList from './components/PlayList';
import SongModal from './components/SongModal';
import { Container } from 'reactstrap';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <SongModal />
          <PlayList />
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
