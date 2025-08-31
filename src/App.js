
import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/popMovieLogo.png";
import JWT from "./assets/JWT.png"
import api from "./api";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("/movie/popular", {
          params: { page: 1 },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    }
    fetchMovies();
  }, [])


  return (
    <div> 
      <nav className="navbar">
        <img src={logo} />
        <input type="text" placeholder="Search Movies..." />
      </nav>

      <div className="banner">
        <img src={JWT} />
        <h5>John Wick has retired from his career as an assassin 
          to live a quiet life with his wife, Helen. </h5>
        <button>Watch</button>
      </div>


        <h1 className="newRelease">New release</h1>

        
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>⭐ {movie.vote_average.toFixed(1)}</p>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
}
export default App;
