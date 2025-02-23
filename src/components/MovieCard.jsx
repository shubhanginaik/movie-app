const MovieCard = ({ show }) => {
  return (
    <div>
      <img src={show.image.medium} alt={show.name} />
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
    </div>
  );
};

export default MovieCard;
