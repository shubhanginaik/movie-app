const MovieCard = ({ show }) => {
  return (
    <div className="movie-card">
      <img src={show.image.medium} alt={show.name} />
      <h2>{show.name}</h2>
    </div>
  );
};

export default MovieCard;
