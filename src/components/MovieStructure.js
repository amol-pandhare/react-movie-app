import React from 'react';
import MovieCard from './MovieCard';

function MovieStructure(props) {

    const MovieListDisp = () => {
        return props.movieList.map((item) => {
            return <MovieCard key={item.id}
            id={item.id}
            title={item.name} 
            subTitle={item.subtitle} 
            rating={item.rating}
            description={item.desc} 
            poster={item.image}
            />
        })
    }
    
  return (
      
    <div className="Container">
        <div className="row">
        <MovieListDisp /> 
        </div>
    </div>
              
  );
}

export default MovieStructure;
