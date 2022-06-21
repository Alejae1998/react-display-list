import { useState, useEffect } from 'react';
import './App.css';
import { getMovies } from './services/fetch-utils';
import MovieList from './MoviesList';
import { getCats } from './services/fetch-utils';
import CatsList from './CatsList';
import RestaurantList from './MoviesList';
import { getRestaurants } from './services/fetch-utils';
// import your arrays here

function App() {
  const [restaurants, setRestaurants] = useState([]);
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
  async function fetchRestaurants() {
    const restaurants = await getRestaurants();
    setRestaurants(restaurants);
  }
  useEffect(() => {
    fetchMovies();
    fetchCats();
    fetchRestaurants();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <RestaurantList restaurants={restaurants} />
        <MovieList movies={movies} />

        <CatsList cats={cats} />
        
      </header>
    </div>
  );
}

export default App;
