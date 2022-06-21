import { useState, useEffect } from 'react';
import './App.css';
import { getMovies } from './services/fetch-utils';
import MovieList from './MoviesList';
import { getCats } from './services/fetch-utils';
import CatsList from './CatsList';
// import your arrays here

function App() {
  // const [restaurants, setRestaurants] = useState([]);
  const [movies, setMovies] = useState([]);
  const [cats, setCats] = useState([]);
  // const [pets, setPets] = useState([]);

  async function fetchMovies() {
    const movies = await getMovies();
    setMovies(movies);
  }
  async function fetchCats() {
    const cats = await getCats();
    setCats(cats);
  }
  useEffect(() => {
    fetchMovies();
    fetchCats();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        {/* <RestaurantList restaurants={restaurants} /> */}
        <MovieList movies={movies} />

        <CatsList cats={cats} />
        
      </header>
    </div>
  );
}

export default App;
