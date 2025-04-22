import {  useState } from "react";
import MovieCard from "../components/MovieCard";

import { getSearchMovies } from "../services/api";

import "../css/Home.css";

const Home = () => {

    const [searchQuery,setSearchQuery]=useState("");
    const [movies,setMovies]=useState([]);

  // const movies = [
  //   { id: 1, title: "John Wick", release_date: "2020" },
  //   { id: 2, title: "Terminator", release_date: "1998" },
  //   { id: 3, title: "Matrix", release_date: "1999" },
  // ];

  // const movies=getSearchMovies(setSearchQuery);

  const handelSearch = async(e) => {
    e.preventDefault();
    try {
      const searchResult=await getSearchMovies(searchQuery);
      console.log("Working");
      console.log(searchResult);
      setMovies(searchResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handelSearch} className="search-form">
        <input onChange={(e)=>setSearchQuery(e.target.value)}
          type="text"
        value={searchQuery}
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
