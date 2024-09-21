import axios from 'axios'

const MOVIE_BASE_URI = "https://api.themoviedb.org/3"
const API_KEY = "c0c8c25a296934efa0aa2165160fe60e"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=c0c8c25a296934efa0aa2165160fe60e';

const getTrendingVideos = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c0c8c25a296934efa0aa2165160fe60e')

const getMovieByGenreId=(id)=>
  axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {getTrendingVideos,getMovieByGenreId}