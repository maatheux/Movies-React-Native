import axios from 'axios';

// URL FIMLE EM CARTAS
// https://api.themoviedb.org/3/movie/now_playing?api_key=63fa77a64cd95420e92e371c09fde903&language=pt-BR&page=1

export const key = '63fa77a64cd95420e92e371c09fde903';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3' // parte url que não muda
});

export default api;
