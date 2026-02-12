import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import './App.css';

function App() {
  return (
    <>
      <title>Movie Search</title>
      <div className="app">
        <header className="app-header">
          <h1> Movie Search</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;