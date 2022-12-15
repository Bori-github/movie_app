import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = useCallback(async () => {
    const {
      data: {
        data: { movie },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );

    setMovie(movie);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  if (!movie.id) {
    return (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
    );
  }

  return (
    <div className="detail__container">
      <img
        src={movie.large_cover_image}
        alt={movie.title}
        title={movie.title}
      />
      <div className="detail__info">
        <h3 className="detail__title">{movie.title_long}</h3>
        <ul className="detail__genres">
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p className="detail__summary">{movie.description_full}</p>
      </div>
    </div>
  );
};

export default Detail;
