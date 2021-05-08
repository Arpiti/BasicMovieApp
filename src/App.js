import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import { TRENDING_API, SEARCH_API } from './api/movieDB';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getMovies(TRENDING_API);
  }, []);

  const getMovies = (API) => {

    fetch(API)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
  }

  const handleSearchButton = async (e) => {
    e.preventDefault();

    if (searchText && searchText !== '') {
      await getMovies(SEARCH_API + searchText);
      await setSearchText('');
    }
    else {
      getMovies(TRENDING_API);
    }

  }

  return (
    <div className="App">
      <header>
        <form onSubmit={handleSearchButton}>
          <h1 className="brandName">Farzi IMDB</h1>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText} />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map(movie => <Movie key={movie.id} movieData={movie} />)}
      </div>
    </div>
  );
}

export default App;
