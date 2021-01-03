const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '98821d28938ee5f201a6b9b7afe95fef';

export const URL = 'https://image.tmdb.org/t/p/w500';

async function apiService(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// список самых популярных фильмов на сегодня
export function fetchTrending(page) {
  return apiService(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );
}
// поиск кинофильма по ключевому слову
export function fetchSearchMovies(query) {
  return apiService(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
}
//  страница с детальной информацией о кинофильме
export function fetchMovieDetails(id) {
  return apiService(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}
// Информация об актерском составе
export function fetchMovieCast(id) {
  return apiService(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
}
//  информация об обзорах
export function fetchMovieReviews(id) {
  return apiService(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
}
