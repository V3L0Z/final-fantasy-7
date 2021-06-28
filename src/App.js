import React from 'react';
import Menu from './Menu';
import Time from './Time';
import Location from './Location';
import Stats from './Stats';

import './App.css';

function App() {
  return (
    <div>
      <Stats />
      <Menu /> 
      <Time />
      <Location />
    </div>
  );
}

export default App;
