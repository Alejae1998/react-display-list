
import Movies from './MoviesItem';

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      
      {movies.map((movie) => (
        <Movies key={movie.name} movie={movie} />
      ))}
    </div>
  );
}


