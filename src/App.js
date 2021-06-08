import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Menu from './components/menu'
import Rotas from './rotas'
import Footer from './components/footer'


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Rotas />
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
