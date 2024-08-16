import { useState, useEffect } from 'react';
import { searchMovies } from '../api';
import SearchBar from '../components/searchBar';
import MovieList from '../components/movieList';
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Carregar resultados e termo de pesquisa do localStorage ao montar o componente
    useEffect(() => {
        const storedMovies = localStorage.getItem('movies');
        const storedSearchTerm = localStorage.getItem('searchTerm');
        

        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        }

        if (storedSearchTerm) {
            setSearchTerm(storedSearchTerm);
        }
    }, []);

    // Salvar resultados e termo de pesquisa no localStorage sempre que eles mudarem
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
        localStorage.setItem('searchTerm', searchTerm);
    }, [movies, searchTerm]);

    function goToFavorites() {
        navigate("/favorites");
    }

    const handleSearch = async (filters) => {
        const data = await searchMovies(filters);
        setMovies(data.Search || []);
        setSearchTerm(filters.query);

        // Salvar no localStorage
        localStorage.setItem('movies', JSON.stringify(data.Search || []));
        localStorage.setItem('searchTerm', filters.query);
    };

    return (
        <div className='w-full flex flex-col items-center space-y-6'>
            <SearchBar onSearch={handleSearch} />
            <div className="w-full h-1 bg-zinc-800" />
            <div className='flex items-center space-y-6'>
                {movies.length === 0 ? (
                    <h1 className="font-bold text-5xl text-zinc-600">Pesquise por um Filme</h1>
                ) : (
                    <h2 className="font-semibold text-5xl text-zinc-600">
                        Resultados da pesquisa por &quot;{searchTerm}&quot;
                    </h2>
                )}
                <button onClick={goToFavorites} className='flex bg-slate-400 text-zinc-600 space-x-2 rounded-md p-1.5 hover:bg-slate-500 absolute right-12'>
                    <p>Favorites</p>
                    <Star color="#52525b"/>
                </button>
            </div>
            <MovieList movies={movies} />
        </div>
    );
}

export default Home;
