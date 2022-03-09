import "./App.css";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Add from "./components/Add";
import { MoviesData } from "./components/Movies";
import MovieList from "./components/MovieList";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieTrailer from "./components/MovieTrailer";
function App() {
  const [Movies, setMovies] = useState(MoviesData);
  const addHandler = (newMovie) => {
    setMovies([...Movies, newMovie]);
  };

  const [search, setSearch] = useState("");

  const [rating, setRating] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Filter setSearch={setSearch} rating={rating} setRating={setRating} />
        <Add addHandler={addHandler} />

        <Routes>
          <Route
            path="/" element={<MovieList Movies={Movies} search={search} rating={rating} />}
          />
          <Route path="/:id" element={<MovieTrailer Movies={Movies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
