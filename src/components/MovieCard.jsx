import { Link } from "react-router-dom"

import {FaStar} from "react-icons/fa"
import Movie from "../pages/Movie"
const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true, type = 1}) => {
  
  //var url_path = type == 1 ? movie.backdrop_path : type == 2 ? movie.poster_path : ""
  var url_path = type == 1 ? movie.backdrop_path : movie.poster_path
  
  return <div className="movie-card">
    <img src={imageUrl + url_path} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>
        <FaStar /> {movie.vote_avarage}
    </p>
    {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
  </div>
}

export default MovieCard