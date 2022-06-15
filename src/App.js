import { useState, useEffect } from 'react';
import './App.css';
import { getMovies } from './services/fetch-utils';
import MovieList from './MoviesList';
// import your arrays here

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [movies, setMovies] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(async () => {
    const restaurantResponse = await getRestaurants();
    const movieResponse = await getMovies();
    const snackResponse = await getSnacks();
    const petResponse = await getPets();

    setRestaurants(restaurantResponse);
    setMovies(movieResponse);
    setSnacks(snackResponse);
    setPets(petResponse);
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <RestaurantList restaurants={restaurants} />
        <MovieList movies={movies} />
        <SnackList snacks={snacks} />
        <PetList pets={pets} />
      </header>
    </div>
  );
}

export default App;
