const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export async function searchMovies({ query = '', year = ''}) {
  let url = `${API_URL}`;

  if (query) {
    url += `&s=${query}`;
  }

  if (year) {
    url += `&y=${year}`;
  }

  const response = await fetch(url);
  const data = await response.json();


  return data;
}


export async function getMovieDetails(id) {
  const response = await fetch(`${API_URL}&i=${id}`);
  return response.json();
}
