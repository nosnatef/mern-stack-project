import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./components/AppNavbar";
import PlayList from './components/PlayList';
import SongModal from './components/SongModal';
import PlayListCard from './components/PlayListCard';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <Row>
            <PlayListCard />
            <PlayListCard />
          </Row>
        </Container>
        
      </div>
      
      //comment out the old playlist app
      /*
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <SongModal />
          <PlayList />
        </Container>
      </div>
      </Provider>
      */
    );
  }
}

export default App;
