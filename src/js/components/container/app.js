import React, { Component } from 'react';

import ScenicSpots from './scenic_spots';
import SearchBar from './search_bar';

class App extends Component {
  render() {
    return (
      <div className="main">
        <SearchBar/>
        <ScenicSpots/>
      </div>
    );
  }
}

export default App;