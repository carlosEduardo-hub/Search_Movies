/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/favoritesContext';

 
function MovieCard({ movie }) {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);

    return (
        <div className='border p-4 rounded shadow-lg flex flex-col items-center'>
            <Link to={`/movie/${movie.imdbID}`}>
                <div className='w-full flex flex-col items-center'>
                    <div className='flex'>
                        <h3 className="font-medium text-zinc-300">{movie.Title} - </h3>
                        <p className="font-medium text-zinc-300">{movie.Year}</p>
                    </div>
                    <img src={movie.Poster} alt={`${movie.Title} Poster`} className="mb-4" />
                </div>
            </Link>
            

            {isFavorite ? (
                <button
                    onClick={() => removeFavorite(movie.imdbID)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Remover dos Favoritos
                </button>
            ) : (
                <button
                    onClick={() => addFavorite(movie)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Adicionar aos Favoritos
                </button>
            )}
        </div>
    );
}

export default MovieCard;
