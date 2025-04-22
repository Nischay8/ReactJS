import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext";

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.imdbID);

    function onFavoriteClick(e) {
        e.preventDefault();

       if(favorite){
        removeFromFavorites(movie.imdbID);
       }else{
        addToFavorites(movie);
       }
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3 style={{color:"white"}}>{movie.Title}</h3>
            <p style={{color:"white"}}>{movie.Year}</p>
        </div>
    </div>
}

export default MovieCard