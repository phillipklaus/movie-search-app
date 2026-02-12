import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import './Home.css';


const API_KEY = '4e61df8c';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

  const searchMovies = async (e) => {
    e.preventDefault();
    
    if (searchTerm.trim() === '') {
      setError('Please enter a movie title');
      return;
    }

    setLoading(true);
    setError('');
    setSearched(true);

    try {
      const response = await fetch(`${API_URL}&s=${searchTerm}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found');
      }
    } catch {
      setError('Failed to fetch movies. Please try again.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="home">
      <div className="search-section">
        <form onSubmit={searchMovies} className="search-form">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Searching for movies...</p>
        </div>
      )}

      {error && !loading && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onClick={() => handleMovieClick(movie.imdbID)}
            />
          ))}
        </div>
      )}

      {!loading && !error && searched && movies.length === 0 && (
        <div className="no-results">
          <p>No movies found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
}

export default Home;