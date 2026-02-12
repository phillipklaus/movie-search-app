import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetail.css';

const API_KEY = '4e61df8c';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`${API_URL}&i=${id}&plot=full`);
        const data = await response.json();

        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error || 'Movie not found');
        }
      } catch {
        setError('Failed to fetch movie details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="movie-detail">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading movie details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-detail">
        <div className="error">
          <p>{error}</p>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="movie-detail">
      <button onClick={() => navigate('/')} className="back-button">
        Back to Search
      </button>

      <div className="detail-container">
        <div className="poster-section">
          {movie.Poster !== 'N/A' ? (
            <img src={movie.Poster} alt={movie.Title} className="detail-poster" />
          ) : (
            <div className="no-poster">No Poster Available</div>
          )}
        </div>

        <div className="info-section">
          <h1 className="movie-title">{movie.Title}</h1>
          <p className="movie-year">{movie.Year} • {movie.Rated} • {movie.Runtime}</p>
          
          <div className="movie-genres">
            {movie.Genre.split(', ').map((genre, index) => (
              <span key={index} className="genre-tag">{genre}</span>
            ))}
          </div>

          <div className="ratings-section">
            {movie.imdbRating !== 'N/A' && (
              <div className="rating">
                <span className="rating-label">IMDb</span>
                <span className="rating-value">⭐ {movie.imdbRating}/10</span>
              </div>
            )}
            {movie.Ratings && movie.Ratings.map((rating, index) => (
              <div key={index} className="rating">
                <span className="rating-label">{rating.Source}</span>
                <span className="rating-value">{rating.Value}</span>
              </div>
            ))}
          </div>

          <div className="plot-section">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <strong>Director:</strong> {movie.Director}
            </div>
            <div className="detail-item">
              <strong>Writer:</strong> {movie.Writer}
            </div>
            <div className="detail-item">
              <strong>Actors:</strong> {movie.Actors}
            </div>
            <div className="detail-item">
              <strong>Language:</strong> {movie.Language}
            </div>
            <div className="detail-item">
              <strong>Country:</strong> {movie.Country}
            </div>
            {movie.Awards !== 'N/A' && (
              <div className="detail-item">
                <strong>Awards:</strong> {movie.Awards}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;