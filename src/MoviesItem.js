import react from 'react';

export default function Movies({ movie }) {
  return (
    <div className="movie">
      <p>Movie Name: {movie.name}</p>
      <p>Released in: {movie.year}</p>
      <p>Directed by: {movie.director}</p>
    </div>
  );
}
