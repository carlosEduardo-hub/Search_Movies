import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MovieDetailsPage from './pages/movieDetailsPage';
import FavoritesPage from './pages/favoritesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
