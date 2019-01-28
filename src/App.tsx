import React, { Component } from 'react';

import { SelectGamesContainer } from './smart/SelectGames'
import { EditGameContainer } from './smart/EditGame'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <SelectGamesContainer />
        <EditGameContainer />
      </div>
    );
  }
}

export default App;
