import { useCallback, useEffect, useState } from "react";
import Box from "./components/Box";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Main from "./components/Main";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import NumResults from "./components/NumResults";
import Search from "./components/Search";
import WatchedMoviesList from "./components/WatchedMoviesList";
import WatchedSummary from "./components/WatchedSummary";
import { useMovies } from "./hooks/useMovies";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useState(() => {
    const storeValue = localStorage.getItem("watched");
    return JSON.parse(storeValue);
  });

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = useCallback(() => {
    setSelectedId(null);
  }, []);

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  };

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
