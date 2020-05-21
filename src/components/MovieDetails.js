import React from 'react';
import movies from '../moviesDb.json';
import { Link } from 'react-router-dom';

function MovieDetails(props) {
    const {params} = props.match;
  return (
      <div className="App-header   ">
        <p>Movie - {movies[params.id].name}</p>
        <p>Subtitle - {movies[params.id].subtitle}</p>
        <img src={movies[params.id].image} />
        <p>Rating - {movies[params.id].rating}/5</p>
        <p>{movies[params.id].desc}</p>

        <Link to="/movies">Go Back</Link>
      </div>
    
  );
}

export default MovieDetails;
 