import React, { Component, Fragment } from 'react';
import People from './components/People';
import House from './components/House';
import Building from './components/Building';
import Apartment from './components/Apartment';
import Proto from './prototype/Proto';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>My App</div>
        <Proto>
          <div>Proto</div>
          <People app={'app for people'}/>
          <House />
          <Building>
            <div>Nesto Nesto</div>
            <Apartment />
          </Building>
        </Proto>
      </Fragment>
    );
  }
}

export default App;
