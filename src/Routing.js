import React from 'react';

import {Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import MovieDetails from './components/MovieDetails';

function Routing() {
    
return (
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/movies" component={App}/>
        <Route exact path="/movies/:id" component={MovieDetails}/>
      </div>
    </Router>
  )
 
}

export default Routing;