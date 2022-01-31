import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Who from './components/Who';

function App() {
  window.onresize = function () {
    // eslint-disable-next-line no-restricted-globals
    setTimeout(() => { location.reload(); }, 500)
  }
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Home></Home>
      <Who></Who>
    </React.Fragment>
  );
}

export default App;
