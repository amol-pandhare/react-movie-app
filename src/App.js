import React from 'react';
import Structure from './components/MovieStructure';
import './App.css';
import movies from './moviesDb.json';

function App() {
  return (
    <div className="App">
      <header className="center">
        <h1>
          List of Movies
        </h1>
      </header>
      <Structure movieList={movies}/>
    </div>
  );
}

export default App;
