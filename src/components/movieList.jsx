/* eslint-disable react/prop-types */
import MovieCard from './movieCard';

 
function MovieList({ movies }) {
  return (
    <div className="w-auto items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
