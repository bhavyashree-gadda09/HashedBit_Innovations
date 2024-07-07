import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieDetails.css'; 

const MovieDetails = () => {
  const { id } = useParams();
  const movie = { id, title: `Movie ${id}`, description: `Description for Movie ${id}` };

  return (
    <div className="movie-details-container">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`} className="book-seat-link">
        <button className="book-seat-button">Book Seat</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
