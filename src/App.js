import React from 'react';
import './App.min.css';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PokemonList/>
    </div>
  );
}

export default App;
