import React from 'react';

import Chat from './components/Chat';
import Join from './components/Join';

import { BrowserRouter as Router, Route, } from 'react-router-dom';

function App () {
  return (
    <Router>
      <Route path="/" exact element={Join} />
      <Route path="/chat" element={Chat} />
    </Router>
  );
}

export default App;