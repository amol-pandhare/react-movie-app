import React from 'react';

function MovieCard(props) {
  return (
    
            <div className="col-md-4">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                     <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">{props.title ? props.title : 'Movie Title'}</strong>
                    <h6 className="mb-0">
                        <a className="text-dark" href="#">{props.subTitle ? props.subTitle : 'Movie subtitle'}</a>
                    </h6>
                    <div className="mb-1 text-muted small">{props.rating} of 5 star</div>
                    <p className="card-text mb-auto">{props.description}</p>
                    <a className="btn btn-outline-primary btn-sm" role="button" href={'/movies/'+props.id}>View Details</a>
                    </div>
                    <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={props.poster}  />
                </div>
            </div>
            
  );
}

export default MovieCard;
