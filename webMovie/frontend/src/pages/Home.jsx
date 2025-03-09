import MovieCard from "../components/MovieCard"
import {useState} from "react"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Sonic 3", release_date: "2025"},
        {id: 2, title: "Moana", release_date: "2025"},
        {id: 3, title: "Fast Five", release_date: "2025"}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search ofr movies..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button" >Search</button>
            </form>


            <div className="movies-grid">
                {movies.map((movie) => 
                (
                <MovieCard movie = {movie} key = {movie.id} /> )
                )} 
            </div>
        </div>
    )
}

export default Home