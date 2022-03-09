import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ Movies, search, rating }) {
  return (
    <div className="movie-list">
      {Movies.filter(
        (el) =>
          el.name.toUpperCase().includes(search.toUpperCase().trim()) &&
          el.rate >= rating
      ).map((el) => (
        <div key={el.id}>
        <Link to={`/${el.id}`}>
        <MovieCard key={el.id} Aflem={el} />
        </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
