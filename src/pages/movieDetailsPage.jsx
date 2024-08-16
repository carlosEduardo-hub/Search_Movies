import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../api';
import { MoveRight } from "lucide-react";

function MovieDetailsPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const data = await getMovieDetails(id);
            setMovie(data);
        }
        fetchData();
    }, [id]);

    function returnHome(){
        navigate("/");
    }

    if (!movie) return <div>Loading...</div>;

    return (
        <div className='p-7 space-y-8'>
            <div className='flex items-center justify-between'>
                <h1 className="font-bold text-5xl text-zinc-600">Detalhes</h1>
                <MoveRight onClick={returnHome} color="#52525b" className='size-20 cursor-pointer' />
            </div>

            <div className="w-full h-1 bg-zinc-800" />

            <div className='flex'>
                <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                <div className='px-4'>
                    <h1 className="font-medium text-lg text-zinc-300">{movie.Title}</h1>
                    <p className="font-medium text-lg text-zinc-300"><strong>Year:</strong> {movie.Year}</p>
                    <p className="font-medium text-lg text-zinc-300"><strong>Director:</strong> {movie.Director}</p>
                    <p className="font-medium text-lg text-zinc-300"><strong>Actors:</strong> {movie.Actors}</p>
                    <p className="font-medium text-lg text-zinc-300"><strong>Plot:</strong> {movie.Plot}</p>
                    <p className="font-medium text-lg text-zinc-300"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
