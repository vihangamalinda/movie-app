import "../css/MovieCard.css"

function MovieCard({movie}) {
    function onFavouriteClick(){
        alert('Favourite clicked!');
    }
    const img_url =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={img_url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={onFavouriteClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard