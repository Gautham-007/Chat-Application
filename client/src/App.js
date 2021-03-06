import React from 'react';

import Chat from './components/Chat';
import Join from './components/Join';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App () {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;