import MovieCard from "../components/MovieCard.jsx";

function Home() {
    const movies =[
        {id:1,title:"Movie 1",release_date:"444",url:"mmm"},
        {id:2,title:"Movie 2",release_date:"222",url:"mmm"},
        {id:3,title:"Movie 3",release_date:"333",url:"mmm"},

    ]
    const handler = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="home">
            <form onSubmit={handler} className="search-form">
                <input type="text" placeholder="Search..."  className="search-input"/>
                <button type="submit">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}
export default Home;