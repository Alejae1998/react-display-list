

export default function Movies({ movie }) {
  return (
    <div className="movie">
      <h2>Movie Name: {movie.name}</h2>
      <p>Released in: {movie.year}</p>
      <p>Directed by: {movie.director}</p>
    </div>
  );
}
