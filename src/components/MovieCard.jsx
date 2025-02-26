import React from "react";

const MovieCard = ({ show }) => {
  return (
    <div className="movie-card">
      <img
        src={show.image.medium}
        alt={show.name}
        className="object-cover w-full h-48"
      />
      <h3>{show.name}</h3>
      <div className="content">
        <span className="lang">{show.language}</span>
        <span className="year">{show.premiered}</span>
        <div className="rating">
          <img src="/star.svg" alt="Rating" />
          <p>{show.rating.average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
