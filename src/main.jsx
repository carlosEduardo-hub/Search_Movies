import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FavoritesProvider } from './contexts/favoritesContext';

createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>,
)
