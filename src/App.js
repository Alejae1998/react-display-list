import { useState, useEffect } from 'react';
import './App.css';
import { getMovies } from './services/fetch-utils';
import MovieList from './MoviesList';
import { getCats } from './services/fetch-utils';
import CatsList from './CatsList';
import RestaurantList from './MoviesList';
import { getRestaurants } from './services/fetch-utils';
import PetsList from './PetsList';
import { getPets } from './services/fetch-utils';
// import your arrays here

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [movies, setMovies] = useState([]);
  const [cats, setCats] = useState([]);
  const [pets, setPets] = useState([]);

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
  async function fetchPets() {
    const pets = await getPets();
    setPets(pets);
  }
  useEffect(() => {
    fetchMovies();
    fetchCats();
    fetchRestaurants();
    fetchPets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, 
  []);

  return (
    <div className="App">
      <header className="app-header">
        <MovieList movies={movies} />
        <CatsList cats={cats} />
        <RestaurantList restaurants={restaurants} />
        <PetsList pets={pets} />
      </header>
    </div>
  );
}

export default App;
