import PropTypes from 'prop-types';
import './MovieCard.css';

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <div className="movie-poster-container">
        {movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
        ) : (
          <div className="no-poster">No Poster</div>
        )}
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        <span className="movie-type">{movie.Type}</span>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Type: PropTypes.string,
    imdbID: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieCard;