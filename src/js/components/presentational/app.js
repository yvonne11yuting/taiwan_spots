import React, { Component } from 'react';

import SearchBar from '../container/search_bar';
import ScenicSpotsEach from '../container/scenic_spots_each';

function App() {
  return (
    <div className="main">
      <SearchBar/>
      <ScenicSpotsEach/>
    </div>
  )
}

export default App;