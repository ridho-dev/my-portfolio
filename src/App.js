import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  window.onresize = function () {
    // eslint-disable-next-line no-restricted-globals
    setTimeout(() => { location.reload(); }, 500)
  }
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
    </React.Fragment>
  );
}

export default App;
