import Movies from './MoviesItem';

export default function MovieList({ movies = [] }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movies key={movie.name} movie={movie} />
      ))}
    </div>
  );
}
