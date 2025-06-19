import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies =[
        {id:1,title:"Red",release_date:"444",url:"mmm"},
        {id:2,title:"Hoy hat",release_date:"222",url:"mmm"},
        {id:3,title:"Jhonnn as",release_date:"333",url:"mmm"},

    ]
    const handler = (e)=>{
        e.preventDefault();
        console.log(searchQuery);
        setSearchQuery("");
    }

    return (
        <div className="home">
            <form onSubmit={handler} className="search-form">
                <input type="text" placeholder="Search..."  className="search-input" value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="movies-grid">
                { movies.map((movie) =>
                    (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    )
}
export default Home;