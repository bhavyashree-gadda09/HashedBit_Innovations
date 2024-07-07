import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from './movies';
import './styles.css';

const MovieList = () => {
  return (
    <div className="movie-list-container">
      <h2>Explore Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-details">
                <h3 className="movie-title">{movie.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
