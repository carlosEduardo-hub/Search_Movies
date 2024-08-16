import { useFavorites } from '../contexts/favoritesContext';
import MovieList from '../components/movieList';
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FavoritesPage() {
    const { favorites } = useFavorites();
    const navigate = useNavigate();

    function returnHome() {
        navigate("/");
    }

    return (
        <div className="w-full flex flex-col items-center space-y-6">
            <div className='w-full flex items-center justify-center py-6 relative'>
                <h1 className="font-bold text-5xl text-zinc-600">Meus Filmes Favoritos</h1>
                <MoveRight onClick={returnHome} color="#52525b" className='size-20 cursor-pointer absolute  right-6' />
            </div>

            <div className="w-full h-1 bg-zinc-800" />

            {favorites.length > 0 ? (
                <MovieList movies={favorites} />
            ) : (
                <p className="text-lg">Você ainda não adicionou nenhum filme aos favoritos.</p>
            )}
        </div>
    );
}

export default FavoritesPage;
