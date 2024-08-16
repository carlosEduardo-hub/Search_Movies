import { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  return useContext(FavoritesContext);
}

// eslint-disable-next-line react/prop-types
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Carregar favoritos do localStorage quando o componente for montado
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Salvar favoritos no localStorage sempre que a lista de favoritos mudar
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(movie => movie.imdbID !== movieId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
