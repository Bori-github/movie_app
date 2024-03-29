import { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );

    setMovies(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="container">
      {movies && movies.length > 0 ? (
        <div className="movies">
          {movies.map((movie) => (
            <Movie key={movie.id} movieData={movie} />
          ))}
        </div>
      ) : (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      )}
    </section>
  );
};

export default Home;
