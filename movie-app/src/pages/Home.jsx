import MovieCard from "../components/MovieCard.jsx";
import {useState,useEffect} from "react";
import "../css/Home.css"
import {searchMovies,getPopularMovies} from "../services/api.js";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
      const loadPopularMovies =async ()=>{
        try {
            const result = await getPopularMovies()
            console.log(result)
            setMovies(result)
        }catch (error){
            console.log(error)
            setError("Failed to load: "+error)
        } finally {
            setLoading(false)
            // setTimeout(() =>setLoading(false) , 3000)
        }

      }
    loadPopularMovies()
    },[])

    // const movies =[
    //     {id:1,title:"Red",release_date:"444",url:"mmm"},
    //     {id:2,title:"Hoy hat",release_date:"222",url:"mmm"},
    //     {id:3,title:"Jhonnn as",release_date:"333",url:"mmm"},

    // ]
    const handler = (e)=>{
        e.preventDefault();
        console.log(searchQuery);
        setSearchQuery("");
    }

    return (
        <div className="home">
            <form onSubmit={handler} className="search-form">
                <input type="text" placeholder="Search..." className="search-input" value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Loading...</div> : <div className="movies-grid">
                {movies.map((movie) =>
                    (<MovieCard movie={movie} key={movie.id}/>))}
            </div>}
        </div>
    )
}

export default Home;